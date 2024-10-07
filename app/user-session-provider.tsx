import { ID } from "appwrite";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { redirect, RedirectType } from "next/navigation";
import { account } from "./appwrite";

interface User {
  $id: string;
  name?: string;
  email?: string;
}

interface UserType {
  current: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<User>;
}

const UserContext = createContext<UserType | undefined>(undefined);

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
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    redirect("/dashboard", RedirectType.replace);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const register = async (email: string, password: string) => {
    return account.create(ID.unique(), email, password);
  };

  const init = async () => {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
    } catch (err) {
      setUser(null);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};
