import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { AppwriteException } from "appwrite";
import { account, ID } from "../../lib/appwrite";

interface UserInfo {
  $id: string;
  email: string;
  emailVerified: boolean;
}

interface UserAuth {
  current: UserInfo | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

const UserAuthContext = createContext<UserAuth | undefined>(undefined);

export function useUserAuthContext() {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error(
      "useUserAuthContext must be used within a UserAuthContextProvider"
    );
  }
  return context;
}

interface UserAuthContextProviderProps {
  children: ReactNode;
}

export function UserAuthContextProvider({
  children,
}: UserAuthContextProviderProps) {
  const [user, setUser] = useState<UserInfo | null>(null);

  async function login(email: string, password: string) {
    const { $id } = await account.createEmailPasswordSession(email, password);
    setUser({ $id, email, emailVerified: false });
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(email: string, password: string) {
    await account.create(ID.unique(), email, password);
  }

  async function initVisit() {
    try {
      const {
        $id,
        email,
        emailVerification: emailVerified,
      } = await account.get();
      setUser({ $id, email, emailVerified });
    } catch (exception) {
      if (exception instanceof AppwriteException) {
        setUser(null);
      } else {
        throw exception;
      }
    }
  }

  useEffect(() => {
    initVisit();
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ current: user, login, logout, register }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}
