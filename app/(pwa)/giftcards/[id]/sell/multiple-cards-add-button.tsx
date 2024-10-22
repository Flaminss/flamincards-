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

export default function MultipleCardAddButton() {
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
        size="sm"
        hideCloseButton
        scrollBehavior="inside"
        className="z-50"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
              </ModalHeader> */}
              <ModalBody>
                <div className="grid gap-y-4">
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
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
