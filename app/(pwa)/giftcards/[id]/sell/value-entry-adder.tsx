import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ArrowDownCircleIcon, PlusCircleIcon } from "lucide-react";
import ProofInput from "./proof-input";

export default function GiftCardValueEntryAdder() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="grid place-items-center gap-y-2 border-2 border-dashed rounded-lg p-8"
      >
        <div className="grid place-items-center gap-y-4">
          <PlusCircleIcon className="size-8" />
          <p className="text-sm font-medium">Add Card</p>
        </div>
      </button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        // size="md"
        scrollBehavior="inside"
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
                    selectorIcon:
                      "shrink-0 w-auto h-auto !size-4 text-zinc-400",
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
                  onPress={onClose}
                >
                  Add Card
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
