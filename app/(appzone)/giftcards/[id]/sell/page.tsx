"use client";

import { z } from "zod";
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
import { useRouter } from "next/navigation";
import PWAPageTitle from "@app/(appzone)/page-title";
import { useState } from "react";
import ImageProofInput, { FileInputPayload } from "./image-proof-input";
import RouterLink from "next/link";
import AmountInput from "./amount-input";
import GiftCardFormatInput from "./card-format-input";
import SubmissionSummary from "./submission-summary";

const cardValueSchema = z.object({
  amount: z.number().min(1).max(100_000),
  ecode: z.string().optional(),
  physical: z.array(z.any()),
});

const singleCardFormSchema = z.object({
  title: z.string(),
  region: z.object({
    name: z.string(),
    abbr: z.string(),
  }),
  value: cardValueSchema,
});

const multipleCardFormSchema = z.object({
  title: z.string(),
  region: z.object({
    name: z.string(),
    abbr: z.string(),
  }),
  value: z.array(cardValueSchema),
});

type CardValue = {
  amount: number;
  ecode: string;
  physical: FileInputPayload[];
};

type SingleCardForm = {
  title: string;
  region: {
    name: string;
    abbr: string;
  };
  value: CardValue;
};

type MultipleCardForm = {
  title: string;
  region: {
    name: string;
    abbr: string;
  };
  value: CardValue[];
};

export default function GiftcardBuyPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const [consentToTradeAgreement, setConsentToTradeAgreement] = useState(false);
  const {
    isOpen: orderSubmitted,
    onClose: onCompleteOrder,
    onOpen: onSubmitOrder,
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

  const [paymentMethodSelected, setPaymentMethodSelected] = useState("");

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
    const missingRequiredEcode =
      selectedCardForm === "ecode" && !cardValueEntryEcode;
    const missingRequiredProof =
      selectedCardForm === "image" && cardValueEntryProof.length === 0;

    if (!cardValueEntryAmount || missingRequiredEcode || missingRequiredProof) {
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

  const validateOrderForm = () => {
    const cardForm = {
      title: formattedSelectedCardType,
      region: {
        name:
          regions.find((region) => region.key === Array.from(selectedRegion)[0])
            ?.label || "",
        abbr: getRegionInitials(),
      },
    } as SingleCardForm | MultipleCardForm;

    if (cardValueQuantity === "single") {
      const singleCardValue = {
        amount: parseFloat(cardValueAmount),
        ecode: cardValueEcode || "",
        physical: selectedCardForm === "image" ? cardValueProof : [],
      };

      if (selectedCardForm === "ecode" && !singleCardValue.ecode) {
        return {
          success: false,
          error: "E-Code is required for E-Code form",
          data: undefined,
        };
      }

      if (
        selectedCardForm === "image" &&
        singleCardValue.physical.length === 0
      ) {
        return {
          success: false,
          error: "Image proof is required for Image form",
          data: undefined,
        };
      }

      cardForm.value = singleCardValue;

      return singleCardFormSchema.safeParse(cardForm);
    }

    if (cardValueEntries.length === 0) {
      return {
        success: false,
        error: "At least one card entry is required for multiple quantity",
      };
    }

    cardForm.value = cardValueEntries.map((entry) => ({
      amount: parseFloat(entry.amount),
      ecode: entry.ecode || "",
      physical: entry.proof,
    }));

    return multipleCardFormSchema.safeParse(cardForm);
  };

  const canSubmitOrder = () => {
    if (
      consentToTradeAgreement &&
      paymentMethodSelected &&
      validateOrderForm().success
    ) {
      return true;
    }
    return false;
  };

  const submitOrder = () => {
    const { data: cardForm } = validateOrderForm();
    if (cardForm === undefined) {
      // handle unexpected behaviour
      return;
    }

    const formDataObject = new FormData();
    formDataObject.append("card[title]", cardForm.title);
    formDataObject.append("card[region][name]", cardForm.region.name);
    formDataObject.append("card[region][abbr]", cardForm.region.abbr);

    if (cardValueQuantity === "single") {
      const singleCardForm = cardForm as SingleCardForm;
      formDataObject.append(
        "card[value][amount]",
        singleCardForm.value.amount.toString()
      );
      formDataObject.append("card[value][ecode]", singleCardForm.value.ecode);
      singleCardForm.value.physical.forEach((payload, index: number) => {
        formDataObject.append(`card[value][physical][${index}]`, payload);
      });
    } else {
      const multipleCardForm = cardForm as MultipleCardForm;
      multipleCardForm.value.forEach((entry, entryIndex) => {
        formDataObject.append(
          `card[value][${entryIndex}][amount]`,
          entry.amount.toString()
        );
        formDataObject.append(`card[value][${entryIndex}][ecode]`, entry.ecode);
        entry.physical.forEach((file, fileIndex) => {
          formDataObject.append(
            `card[value][${entryIndex}][physical][${fileIndex}]`,
            file
          );
        });
      });
    }

    for (let [key, value] of Array.from(formDataObject.entries())) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 px-4 mb-2">
        <PWAPageTitle title="Sell - Redeem your Gift Card" />
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
                            {valueEntry.ecode ? (
                              <div className="w-full object-cover h-[140px] rounded-b-sm pt-4 text-3xl text-default-800 text-center grid place-items-center radius-lg shadow-sm">
                                <h5 className="flex flex-col gap-y-1 items-center">
                                  ECODE
                                  <span className="text-xs font-mono text-default-400 font-extralight">
                                    {valueEntry.ecode}
                                  </span>
                                </h5>
                              </div>
                            ) : (
                              <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={`Image proof of giftcard with amount of: ${valueEntry.amount}`}
                                className="w-full object-cover h-[140px] rounded-b-sm"
                                src={valueEntry.proof[0].preview.url}
                              />
                            )}

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
                            {/* {valueEntry.ecode ? (
                              <Tooltip content={valueEntry.ecode}>
                                <div className="flex valueEntrys-center gap-x-2 text-xs ps-3 pe-2 py-1 shadow-sm rounded-lg bg-success-50 border text-success">
                                  E-Code
                                </div>
                              </Tooltip>
                            ) : (
                            )} */}
                            <p className="text-xs uppercase text-default-500">
                              Amount
                            </p>

                            <p className="font-medium text-default-800 px-1">
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
                            <ModalHeader className="pt-6 pb-4 flex items-start justify-between gap-x-4 px-5 gap-y-2.5">
                              <div className="flex flex-col gap-1">
                                <h4 className="text-2xl font-medium">
                                  Amazon (USA) Gift Card
                                </h4>
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
                            <ModalBody className="grid gap-y-4 px-4">
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
                            <ModalFooter className="px-4 pt-6 pb-2">
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

        <SubmissionSummary
          agreedToTerms={consentToTradeAgreement}
          updateTermAgreement={setConsentToTradeAgreement}
          canSubmitOrder={canSubmitOrder}
          submitOrder={submitOrder}
          paymentMethodSelected={paymentMethodSelected}
          onSelectPaymentMethod={() =>
            setPaymentMethodSelected("paymentMethodId")
          }
        />
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
