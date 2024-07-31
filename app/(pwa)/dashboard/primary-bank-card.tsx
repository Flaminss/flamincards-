"use client";

import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";
import { LandmarkIcon, PenBoxIcon, WalletIcon } from "lucide-react";
import { useState } from "react";

export default function PrimaryBankCard() {
  const {
    isOpen: editing,
    onOpen: edit,
    onOpenChange: onEdit,
    onClose: closeEdit,
  } = useDisclosure();

  const [depositTransactionDetails, setDepositTransactionDetails] = useState({
    detailsHidden: false,
    amount: 2000,
    date: "20th July, 2024",
    description: "DEPOSIT to RML-PAID Wallet",
  });

  return (
    <div className="grid gap-y-1 max-w-md w-full mx-auto">
      <article className="relative border shadow p-4 sm:p-5 lg:p-4 text-zinc-100">
        <div className="flex gap-x-3 mb-3">
          <div className="inline-flex items-center">
            <div className="h-4 w-4 rounded-full bg-warning"></div>
            <div className="h-4 w-4 rounded-full bg-danger -ms-1.5"></div>
          </div>
          <span className="text-xs text-zinc-400 font-mono.. uppercase">
            Primary Bank
          </span>
        </div>
        <p className="text-lg sm:text-xl font-mono mb-1">1234 2342 2422</p>
        <p className="text-sm sm:text-medium font-mono flex items-center justify-between gap-x-4">
          <span>John Doe</span>
          <span className="text-sm">09/10</span>
        </p>
        <Button
          variant="light"
          color="success"
          size="sm"
          radius="sm"
          className="text-xs absolute top-2 right-2 min-w-[auto]"
          onClick={() => edit()}
        >
          Edit
        </Button>
      </article>
      <Divider className="w-[90%] mx-auto block border" />
      <Divider className="w-[80%] mx-auto block border" />

      <Modal
        backdrop="blur"
        isOpen={editing}
        classNames={{
          backdrop: "z-[100]",
          wrapper: "z-[110] px-0 pb-0",
          base: "max-h-[min(90vh,_800px)]",
        }}
        shadow="lg"
        size="md"
        onOpenChange={onEdit}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: 20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 py-4">
                <h4 className="text-xl">Edit Bank Details</h4>
              </ModalHeader>
              <ModalBody className="pt-0 pb-4 overflow-y-auto">
                <form className="space-y-4">
                  <Select label="Bank Name" defaultSelectedKeys={["palmpay"]}>
                    <SelectItem key="palmpay">Palmpay</SelectItem>
                    <SelectItem key="zenith">Zenith Bank PLC</SelectItem>
                  </Select>
                  <Input
                    label="Account Number"
                    type="number"
                    value="9000002023"
                    size="lg"
                  />
                  <Input
                    label="Account Name"
                    size="lg"
                    value="Calculating..."
                  />
                  <footer className="pt-6 flex gap-x-2">
                    <Button
                      variant="solid"
                      color="danger"
                      fullWidth
                      size="lg"
                      radius="sm"
                      onClick={() => closeEdit()}
                    >
                      Discard Changes
                    </Button>
                    <Button
                      variant="solid"
                      color="success"
                      fullWidth
                      size="lg"
                      radius="sm"
                      onClick={() => closeEdit()}
                    >
                      Save
                    </Button>
                  </footer>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
