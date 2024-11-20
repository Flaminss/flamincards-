import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { AppwriteException } from "appwrite";
import loginUser, { AuthSession } from "@lib/modules/user/login";
import logoutUser from "@lib/modules/user/logout";
import registerUser from "@lib/modules/user/register";
import getSession from "@lib/modules/user/get-session";

type UserAuthCredentials = { email: string; password: string };

interface UserAuthContext {
  session: AuthSession | null;
  login: (credentials: UserAuthCredentials) => Promise<void>;
  logout: () => Promise<void>;
  register: (credentials: UserAuthCredentials) => Promise<void>;
}

const UserAuthContext = createContext<UserAuthContext | undefined>(undefined);

export function useUserAuthContext() {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error(
      "useUserAuthContext must be used within a UserAuthProvider"
    );
  }
  return context;
}

interface UserAuthProvider {
  children: ReactNode;
}

export function UserAuthProvider({ children }: UserAuthProvider) {
  const [session, setSession] = useState<AuthSession | null>(null);

  async function login(credentials: { email: string; password: string }) {
    const session = await loginUser(credentials);
    // const email = { address: credentials.email, verified: false };
    setSession(session);
  }

  async function logout() {
    setSession(null);
    await logoutUser();
  }

  async function register(credentials: { email: string; password: string }) {
    await registerUser(credentials);
  }

  async function loadSession() {
    try {
      const session = await getSession();
      setSession(session);
    } catch (exception) {
      if (exception instanceof AppwriteException) {
        setSession(null);
      } else {
        throw exception;
      }
    }
  }

  useEffect(() => {
    loadSession();
  }, []);

  return (
    <UserAuthContext.Provider value={{ session, login, logout, register }}>
      {children}
    </UserAuthContext.Provider>
  );
}
