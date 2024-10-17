import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import EmailValidationFeedbackModal from "./modal";
import { useUserAuthContext } from "@/app/user-auth-provider";

interface EmailValidationContextProps {
  showModal: boolean;
  showFeedbackModal: (message: string) => void;
  hideFeedbackModal: () => void;
}

const EmailValidationContext = createContext<
  EmailValidationContextProps | undefined
>(undefined);

export function useEmailValidationContext() {
  const context = useContext(EmailValidationContext);
  if (!context) {
    throw new Error(
      "useEmailValidationContext must be used within an EmailValidationContextProvider"
    );
  }
  return context;
}

interface EmailValidationContextProviderProps {
  children: ReactNode;
}

export function EmailValidationContextProvider({
  children,
}: EmailValidationContextProviderProps) {
  const userAuthContext = useUserAuthContext();
  const [showModal, setShowModal] = useState<boolean>(true);

  function showFeedbackModal(message: string) {
    setShowModal(true);
  }

  function hideFeedbackModal() {
    setShowModal(false);
  }

  useEffect(() => {
    setShowModal(() => {
      const { emailVerified = false } = userAuthContext.current || {};
      return emailVerified ? false : true;
    });
  }, [userAuthContext.current]);

  return (
    <EmailValidationContext.Provider
      value={{
        showModal,
        showFeedbackModal,
        hideFeedbackModal,
      }}
    >
      <>
        {children}
        <EmailValidationFeedbackModal />
      </>
    </EmailValidationContext.Provider>
  );
}
