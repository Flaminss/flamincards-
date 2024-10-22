import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { ArrowDownCircleIcon } from "lucide-react";
import React, { createContext, useContext, useState, ReactNode } from "react";
import ProofInput from "./proof-input";

type GiftCardValueEntry = {
  key: string;
  amount: number;
  ecode: string;
  proof: any;
};

interface GiftCardValueEntryAdderContextProps {
  entries: GiftCardValueEntry[];
  addEntry: (card: GiftCardValueEntry) => void;
  removeEntry: (card: GiftCardValueEntry) => void;
  isEntryAdderOpen: boolean;
  onEntryAdderOpenChange: (open: boolean) => void;
  openEntryAdder: () => void;
  closeEntryAdder: () => void;
}

const GiftCardValueEntryAdderContext = createContext<
  GiftCardValueEntryAdderContextProps | undefined
>(undefined);

export const GiftCardValueEntryAdderProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [entries, setEntries] = useState<GiftCardValueEntry[]>([]);

  const {
    isOpen: isEntryAdderOpen,
    onOpen: openEntryAdder,
    onClose: closeEntryAdder,
    onOpenChange: onEntryAdderOpenChange,
  } = useDisclosure();

  const addEntry = (card: GiftCardValueEntry) => {
    setEntries((prevCards: GiftCardValueEntry[]) => [...prevCards, card]);
  };

  const removeEntry = (card: GiftCardValueEntry) => {
    setEntries((prevCards: GiftCardValueEntry[]) =>
      prevCards.filter((c) => c.key !== card.key)
    );
  };

  return (
    <GiftCardValueEntryAdderContext.Provider
      value={{
        entries,
        addEntry,
        removeEntry,
        isEntryAdderOpen,
        openEntryAdder,
        closeEntryAdder,
        onEntryAdderOpenChange,
      }}
    >
      {children}
    </GiftCardValueEntryAdderContext.Provider>
  );
};

export const useGiftCardValueEntryAdder = () => {
  const context = useContext(GiftCardValueEntryAdderContext);
  if (context === undefined) {
    throw new Error(
      "useGiftCardValueEntryAdder must be used within a GiftCardValueEntryAdderProvider"
    );
  }
  return context;
};

export default function GiftCardValueEntryAdder() {
  const { isEntryAdderOpen, onEntryAdderOpenChange, closeEntryAdder } =
    useGiftCardValueEntryAdder();

  const handleAddCard = () => {
    closeEntryAdder();
  };

  return (
    <Modal
      isOpen={isEntryAdderOpen}
      onOpenChange={onEntryAdderOpenChange}
      placement="bottom-center"
      scrollBehavior="inside"
      className="z-50"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 pt-6 pb-4 px-4">
              <h5 className="font-medium">Amazon (USA) Gift Card</h5>
              <p className="text-xs text-gray-400">
                You're adding one of many cards to redeem
              </p>
            </ModalHeader>
            <ModalBody className="grid gap-y-4 px-3">
              <Select
                label="Amount (#)"
                radius="md"
                size="sm"
                selectionMode="single"
                defaultSelectedKeys={[20]}
                selectorIcon={<ArrowDownCircleIcon />}
                classNames={{
                  selectorIcon: "shrink-0 w-auto h-auto !size-4 text-zinc-400",
                }}
              >
                {[
                  { label: "20", value: 20 },
                  { label: "25", value: 25 },
                  { label: "50", value: 50 },
                ].map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className="text-white"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </Select>

              <Input
                label="E-Code (Optional)"
                placeholder="XXXX-XXXX-XXXX"
                size="lg"
                radius="sm"
              />

              <ProofInput />
            </ModalBody>
            <ModalFooter className="px-3 py-2">
              <Button
                color="primary"
                radius="sm"
                size="lg"
                fullWidth
                onPress={handleAddCard}
              >
                Add Card
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
