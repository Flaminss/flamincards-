"use client";

import clsx from "clsx";
import {
  Button,
  CardFooter,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Tab,
  Tabs,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  Checkbox,
  useDisclosure,
  Selection,
  Tooltip,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import {
  ArrowDownCircleIcon,
  ArrowLeftRightIcon,
  ArrowRightCircleIcon,
  ClockIcon,
  MinusCircle,
  PlusCircleIcon,
  PlusIcon,
  PlusSquareIcon,
  Trash2,
  WalletMinimalIcon,
  XCircleIcon,
} from "lucide-react";
import currencyIcons from "currency-icons";
import { useRouter } from "next/navigation";
import PWAPageTitle from "@/app/(pwa)/page-title";
import { useState } from "react";
import ImageProofInput, { FileInputPayload } from "./image-proof-input";
import RouterLink from "next/link";
import AmountInput from "./amount-input";
import GiftCardFormatInput from "./card-format-input";

export default function GiftcardBuyPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const [consentToTradeAgreement, setConsentToTradeAgreement] = useState(false);
  const {
    isOpen: orderSubmitted,
    onOpen: onSubmitOrder,
    onClose: onCompleteOrder,
    onOpenChange: onOrderSubmitChange,
  } = useDisclosure();
  const {
    isOpen: isCardValueEntryAdderOpen,
    onOpen: onCardValueEntryAdderOpen,
    onClose: onCardValueEntryAdderClose,
    onOpenChange: onCardValueEntryAdderOpenChange,
  } = useDisclosure();

  const { id: selectedCardType } = params;
  const formattedSelectedCardType =
    selectedCardType[0].toUpperCase() + selectedCardType.slice(1);

  const regions = [
    { key: "usa", label: "United States (USA)" },
    { key: "uk", label: "United Kingdom (UK)" },
    { key: "eu", label: "Europe (EU)" },
    { key: "ca", label: "Canada (CA)" },
    { key: "au", label: "Australia (AU)" },
    { key: "jp", label: "Japan (JP)" },
    { key: "cn", label: "China (CN)" },
    { key: "sa", label: "Saudi Arabia (SA)" },
    { key: "in", label: "India (IN)" },
    { key: "aef", label: "United Arab Emirates (UAE)" },
    { key: "za", label: "South Africa (ZA)" },
    { key: "br", label: "Brazil (BR)" },
  ];
  const [selectedRegion, setSelectedRegion] = useState<Selection>(
    new Set(["usa"])
  );
  const getRegionInitials = () => {
    const value = Array.from(selectedRegion)[0];

    if (selectedRegion === "all") {
      return "";
    }

    return value.toString().toUpperCase();
  };

  const [cardValueQuantity, setCardValueQuantity] = useState("single");

  const [cardValueAmount, setCardValueAmount] = useState<string>("");
  const [cardValueEcode, setCardValueEcode] = useState<string>();
  const [cardValueProof, setCardValueProof] = useState(
    [] as FileInputPayload[]
  );
  const [cardValueProofUploadErrors, setCardValueProofUploadErrors] = useState<
    string[]
  >([]);

  const [cardValueEntryAmount, setCardValueEntryAmount] = useState<string>("");
  const [cardValueEntryEcode, setCardValueEntryEcode] = useState<string>();
  const [cardValueEntryProof, setCardValueEntryProof] = useState(
    [] as FileInputPayload[]
  );

  const handleCardValueProofChange = createCardValueProofChangeHandler({
    maxUploads: 1,
    onSetProof: setCardValueProof,
    onSetUploadErrors: setCardValueProofUploadErrors,
  });

  const removeCardValueProof = (fileId: any) => {
    setCardValueProof((prevFiles) => {
      setCardValueProofUploadErrors([]);
      return prevFiles.filter((prevFile) => prevFile.id !== fileId);
    });
  };

  const [cardValueEntryProofUploadErrors, setCardValueEntryProofUploadErrors] =
    useState<string[]>([]);
  const [cardValueEntries, setCardValueEntries] = useState(
    [] as {
      id: string;
      amount: string;
      ecode?: string;
      proof: FileInputPayload[];
    }[]
  );

  const handleCardValueEntryProofChange = createCardValueProofChangeHandler({
    maxUploads: 1,
    onSetProof: setCardValueEntryProof,
    onSetUploadErrors: setCardValueEntryProofUploadErrors,
  });

  const removeCardEntryValueProof = (fileId: any) => {
    setCardValueEntryProof((prevFiles) => {
      setCardValueEntryProofUploadErrors([]);
      return prevFiles.filter((prevFile) => prevFile.id !== fileId);
    });
  };

  const removeCardEntry = (id: string) => {
    setCardValueEntries((prevEntries) => {
      return prevEntries.filter((entry) => entry.id !== id);
    });
  };

  const addCardValueEntry = () => {
    setCardValueEntries((prevEntries) => {
      return [
        ...prevEntries,
        {
          id: crypto.randomUUID(),
          amount: cardValueEntryAmount,
          ecode: cardValueEntryEcode,
          proof: cardValueEntryProof,
        },
      ];
    });

    setCardValueEntryAmount("");
    setCardValueEntryEcode(undefined);
    setCardValueEntryProof([]);
    setCardValueEntryProofUploadErrors([]);
    onCardValueEntryAdderClose();
  };

  const canAddCardValueEntry = () => {
    if (!cardValueEntryAmount && cardValueEntryProof) {
      return false;
    }
    return true;
  };

  const updateCardValueAmount = createUpdateCardValueAmountHandler({
    onSetValue: setCardValueAmount,
  });

  const updateCardValueEntryAmount = createUpdateCardValueAmountHandler({
    onSetValue: setCardValueEntryAmount,
  });

  const [selectedCardForm, setSelectedCardForm] = useState("image");

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 px-4 mb-2">
        <PWAPageTitle title="Sell (Redeem) your Gift Card" />
      </header>

      <main className="px-4 py-6 flex flex-col gap-y-8 xl:flex-row gap-x-12">
        <div className="max-w-xl grow">
          <Image
            shadow="lg"
            radius="lg"
            src="https://th.bing.com/th/id/OIP.I89DeQMyCgVqj_eo-QgPYAHaEr?rs=1&pid=ImgDetMain"
            alt=""
            className="md:hidden object-contain h-[192px] w-full max-w-screen-md mb-12 me-auto"
            classNames={{ wrapper: "bg-default-50 !max-w-[unset] w-full" }}
          />

          <form className="grid gap-y-7">
            <Input
              label="Your Selected Card"
              value={formattedSelectedCardType}
              labelPlacement="outside"
              size="lg"
              radius="md"
              type="button"
              onClick={() => router.push("/giftcards")}
              classNames={{
                base: "cursor-pointer",
                input: "text-start",
                label: "ps-1",
              }}
              endContent={
                <ArrowRightCircleIcon className="!size-4 text-zinc-400" />
              }
            />

            <Select
              items={regions}
              label="Choose card(s) Region"
              labelPlacement="outside"
              size="lg"
              radius="md"
              selectedKeys={selectedRegion}
              onSelectionChange={setSelectedRegion}
              selectorIcon={<ArrowDownCircleIcon />}
              classNames={{
                base: "cursor-pointer",
                label: "ps-1",
                selectorIcon: "shrink-0 w-auto h-auto !size-4 text-zinc-400",
              }}
            >
              {(region) => (
                <SelectItem key={region.key}>{region.label}</SelectItem>
              )}
            </Select>

            <div>
              <h4 className="ps-1 mb-2.5 text-medium text-ellipsis">
                Hom many{" "}
                <span className="font-medium">
                  {formattedSelectedCardType} ({getRegionInitials()})
                </span>{" "}
                Card do you have?
              </h4>

              <Tabs
                size="lg"
                color="primary"
                fullWidth={true}
                radius="md"
                disableAnimation={true}
                classNames={{
                  tab: "pt-1",
                  panel: "pb-0",
                }}
                selectedKey={cardValueQuantity}
                onSelectionChange={(key) =>
                  setCardValueQuantity(key.toString())
                }
              >
                <Tab key="single" title="Just One">
                  <div className="grid gap-y-4">
                    <GiftCardFormatInput
                      value={selectedCardForm}
                      onValueChange={setSelectedCardForm}
                    />

                    <AmountInput
                      value={cardValueAmount}
                      onValueChange={updateCardValueAmount}
                    />

                    {selectedCardForm === "ecode" ? (
                      <Input
                        label="E-Code (Optional)"
                        placeholder="XXXX-XXXX-XXXX"
                        size="lg"
                        radius="sm"
                        value={cardValueEcode}
                        onValueChange={setCardValueEcode}
                      />
                    ) : (
                      <ImageProofInput
                        payloads={cardValueProof}
                        payloadUploadErrors={cardValueProofUploadErrors}
                        payloadMaxByteSize={1_500_000}
                        allowUploadOnClick
                        bulkSelectUploadMaxCount={1}
                        onFileInputChange={handleCardValueProofChange}
                        onRemovePayload={removeCardValueProof}
                      />
                    )}
                  </div>
                </Tab>

                <Tab key="multiple" title="Many">
                  <div
                    className={clsx({
                      "grid grid-cols-2 gap-4 sm:gap-6":
                        cardValueEntries.length > 0,
                    })}
                  >
                    {cardValueEntries.map((valueEntry) => {
                      return (
                        <Card shadow="sm" key={valueEntry.id}>
                          <CardBody className="relative p-0">
                            <Image
                              shadow="sm"
                              radius="lg"
                              width="100%"
                              alt={`Image proof of giftcard with amount of: ${valueEntry.amount}`}
                              className="w-full object-cover h-[140px] rounded-b-sm"
                              src={valueEntry.proof[0].preview.url}
                            />

                            <Button
                              isIconOnly
                              size="sm"
                              radius="sm"
                              color="danger"
                              className="absolute top-2 right-2 z-10"
                            >
                              <Trash2
                                className="size-4"
                                onClick={() => removeCardEntry(valueEntry.id)}
                              />
                            </Button>
                          </CardBody>
                          <CardFooter className="text-sm flex flex-wrap gap-4 justify-between p-3 pt-3">
                            {valueEntry.ecode ? (
                              <Tooltip content={valueEntry.ecode}>
                                <div className="flex valueEntrys-center gap-x-2 text-xs ps-3 pe-2 py-1 shadow-sm rounded-lg bg-success-50 border text-success">
                                  E-Code
                                </div>
                              </Tooltip>
                            ) : (
                              <p className="font-medium text-xs">Amount</p>
                            )}

                            <p className="font-medium text-default-700 px-2">
                              ${valueEntry.amount}
                            </p>
                          </CardFooter>
                        </Card>
                      );
                    })}

                    <button
                      type="button"
                      onClick={onCardValueEntryAdderOpen}
                      className="w-full grid place-items-center gap-y-2 border-2 border-dashed rounded-lg p-8"
                    >
                      <div className="grid place-items-center gap-y-4">
                        <PlusCircleIcon className="size-8" />
                        <p className="text-sm font-medium">Add Card</p>
                      </div>
                    </button>

                    <Modal
                      isOpen={isCardValueEntryAdderOpen}
                      onOpenChange={onCardValueEntryAdderOpenChange}
                      placement="bottom-center"
                      // size="md"
                      scrollBehavior="inside"
                      hideCloseButton
                    >
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="pt-6 pb-4 flex items-start justify-between gap-x-4 px-4 gap-y-2.5">
                              <div className="flex flex-col gap-1">
                                <h5 className="font-medium">
                                  Amazon (USA) Gift Card
                                </h5>
                                <p className="text-xs text-gray-400">
                                  You're adding one of many cards to redeem
                                </p>
                              </div>
                              <Button
                                isIconOnly
                                size="md"
                                radius="full"
                                color="danger"
                                variant="flat"
                                onClick={onClose}
                              >
                                <XCircleIcon />
                              </Button>
                            </ModalHeader>
                            <ModalBody className="grid gap-y-4 px-3">
                              <GiftCardFormatInput
                                value={selectedCardForm}
                                onValueChange={setSelectedCardForm}
                              />

                              <AmountInput
                                value={cardValueEntryAmount}
                                onValueChange={updateCardValueEntryAmount}
                              />

                              {selectedCardForm === "ecode" ? (
                                <Input
                                  label="E-Code (Optional)"
                                  placeholder="XXXX-XXXX-XXXX"
                                  size="lg"
                                  radius="sm"
                                  value={cardValueEntryEcode}
                                  onValueChange={setCardValueEntryEcode}
                                />
                              ) : (
                                <ImageProofInput
                                  payloads={cardValueEntryProof}
                                  payloadUploadErrors={
                                    cardValueEntryProofUploadErrors
                                  }
                                  payloadMaxByteSize={1_500_000}
                                  allowUploadOnClick
                                  bulkSelectUploadMaxCount={1}
                                  onFileInputChange={
                                    handleCardValueEntryProofChange
                                  }
                                  onRemovePayload={removeCardEntryValueProof}
                                />
                              )}
                            </ModalBody>
                            <ModalFooter className="px-3 py-2">
                              <Button
                                color="primary"
                                radius="sm"
                                size="lg"
                                fullWidth
                                onPress={() => addCardValueEntry()}
                                isDisabled={!canAddCardValueEntry()}
                              >
                                Add Card
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </div>
                </Tab>
              </Tabs>
            </div>

            <Textarea
              label="Write a Comment (Optional)"
              placeholder="Give special instructions or explanations on usage (if any)..."
              labelPlacement="outside"
              classNames={{
                label: "ps-1 text-base font-medium mb-.5",
                input: "p-1.5",
              }}
            />
          </form>
        </div>

        <div className="md:pt-6 grow w-full lg:max-w-xl xl:max-w-sm">
          <Card
            className="shadow-xl cardBackground max-w-md mx-auto"
            radius="lg"
          >
            <CardHeader className="hidden xl:flex flex-col p-6">
              <Image
                shadow="lg"
                radius="lg"
                width={undefined}
                height={undefined}
                src="https://th.bing.com/th/id/OIP.I89DeQMyCgVqj_eo-QgPYAHaEr?rs=1&pid=ImgDetMain"
                alt=""
                className="hidden md:block object-contain h-[120px] max-w-screen-md mb-2"
              />
              <Button
                size="md"
                color="warning"
                variant="light"
                className="py-0"
                href="/giftcards"
                as={RouterLink}
                endContent={<ArrowRightCircleIcon size={16} />}
              >
                Choose different card
              </Button>
            </CardHeader>
            <CardBody className="pt-5 pb-4 px-5">
              <div className="mb-6">
                <p className="flex flex-wrap justify-between items-center gap-x-6 gap-y-2 mb-2">
                  <span className="inline-flex items-center text-ellipsis gap-x-4 text-sm">
                    <WalletMinimalIcon className="inline-flex size-4" /> You'll
                    receive:
                  </span>
                  <span className="text-3xl font-medium text-success..">
                    {currencyIcons["NGN"]?.symbol}5000
                  </span>
                </p>
                <p className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
                  <span className="inline-flex items-center text-ellipsis gap-x-4 text-sm">
                    <ArrowLeftRightIcon className="inline-flex size-4" />{" "}
                    Exchange Rate:
                  </span>{" "}
                  <span className="ms-auto lg:text-xl text-success font-medium">
                    {currencyIcons["NGN"]?.symbol}1200/
                    {currencyIcons["USD"]?.symbol}
                  </span>
                </p>
              </div>
              <Checkbox
                size="sm"
                radius="sm"
                color="primary"
                className="gap-x-2"
                checked={consentToTradeAgreement}
                classNames={{ icon: "size-4" }}
                onClick={() =>
                  setConsentToTradeAgreement((consent) => !consent)
                }
              >
                I understand errors and attempted fraud may cause delay or
                refusal of payment.
              </Checkbox>
            </CardBody>
            <CardFooter className="flex-col items-start px-5 pb-5 gap-y-8">
              <Button
                isDisabled={!consentToTradeAgreement}
                size="lg"
                variant="solid"
                color="primary"
                radius="sm"
                fullWidth={true}
                className="border shadow-lg"
                onClick={() => onSubmitOrder()}
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <Modal
        isOpen={orderSubmitted}
        onOpenChange={onOrderSubmitChange}
        backdrop="opaque"
        placement="center"
        className="z-50"
        isDismissable={false}
        hideCloseButton
      >
        <ModalContent className="border">
          {(onClose) => (
            <>
              <ModalBody className="justify-center items-center text-center p-8 pb-6">
                <ClockIcon className="size-14 mb-2 text-warning" />
                <h3 className="text-xl font-semibold">
                  Order Successfully Submitted
                </h3>
                <p className="text-sm text-zinc-400">
                  Your order is being processed! <br />
                  Thank you for your patience.
                </p>
              </ModalBody>
              <ModalFooter className="flex-col items-center p-5">
                <Button
                  color="primary"
                  radius="sm"
                  size="lg"
                  variant="flat"
                  fullWidth
                  className="text-sm font-normal"
                  onPress={() => onCompleteOrder()}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  radius="sm"
                  size="lg"
                  variant="solid"
                  fullWidth
                  className="text-sm font-normal"
                  onPress={() => {
                    onClose();
                    router.push("/transactions/$randomId");
                  }}
                >
                  View Order Status
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

function createCardValueProofChangeHandler({
  maxUploads,
  onSetProof,
  onSetUploadErrors,
}: {
  maxUploads: number;
  onSetProof: (
    updateFn: (files: FileInputPayload[]) => FileInputPayload[]
  ) => void;
  onSetUploadErrors: (updateFn: (errors?: string[]) => string[]) => void;
}) {
  return function (newFiles: FileInputPayload[]) {
    onSetProof((prevFiles: FileInputPayload[]) => {
      let exceededLimit = false;
      const curatedFiles = [...prevFiles];
      const maxUploadableFiles = maxUploads;

      newFiles.forEach((newFile) => {
        if (curatedFiles.length < maxUploadableFiles) {
          curatedFiles.push(newFile);
        } else {
          exceededLimit = true;
        }
      });

      onSetUploadErrors(() => {
        const message = "Max amount of payloads reached";
        return !exceededLimit ? [] : [message];
      });

      return curatedFiles;
    });
  };
}

function createUpdateCardValueAmountHandler({
  onSetValue,
}: {
  onSetValue: (value: string) => void;
}) {
  return function (value: string) {
    const [minValue, maxValue] = [1, 100_000];
    const valueInt = parseInt(value) || 0;
    if (valueInt < minValue || valueInt > maxValue) {
      onSetValue("");
      return;
    }
    onSetValue(valueInt.toString());
  };
}
