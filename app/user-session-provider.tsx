import { AppwriteException, ID } from "appwrite";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { account } from "./appwrite";

interface UserInfo {
  $id: string;
  email: string;
  emailVerified: boolean;
}

interface UserAuthState {
  current: UserInfo | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
}

const UserContext = createContext<UserAuthState | undefined>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
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
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};
