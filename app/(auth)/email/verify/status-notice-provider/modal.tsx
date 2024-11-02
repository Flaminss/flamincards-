import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
  Link,
} from "@nextui-org/react";
import { useEmailValidationContext } from ".";
import { TriangleAlertIcon } from "lucide-react";

export default function EmailValidationFeedbackModal() {
  const emailValidation = useEmailValidationContext();
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Modal
      isOpen={emailValidation.showModal}
      onOpenChange={(shouldOpen) => {
        if (shouldOpen) {
          emailValidation.showFeedbackModal("sup");
        } else {
          emailValidation.hideFeedbackModal();
        }
      }}
      // size="xl"
      // placement="bottom-center"
      // classNames={{ base: "min-h-[78vh]" }}
      className="max-w-lg"
      placement="center"
      hideCloseButton
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center pt-8">
              <TriangleAlertIcon className="size-10 mb-2 mx-auto" />
              <h2 className="text-2xl mb-1">Account Activation Required</h2>
              <p className="text-sm text-gray-500">
                Please verify your email to unlock full access
              </p>
            </ModalHeader>
            <ModalBody className="py-4 text-sm text-center">
              <p className="mb-4">
                To fully activate your account, please check your email and
                click the activation link we sent. Until then, access to certain
                features will be restricted.
              </p>
              <p className="mb-4">
                Didn't receive the email?{" "}
                <a href="#" className="text-blue-500 underline">
                  Resend the activation link
                </a>
                .
              </p>
            </ModalBody>
            <ModalFooter className="pb-8 flex-col items-center gap-y-6">
              <Button
                fullWidth
                color="primary"
                radius="md"
                size="lg"
                onPress={() => emailValidation.hideFeedbackModal()}
              >
                Continue with Limited Access
              </Button>

              <Link href="/dashboard" size="sm" underline="always">
                Visit my Dashboard
              </Link>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
