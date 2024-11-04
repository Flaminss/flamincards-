import RouterLink from "next/link";
import currencyIcons from "currency-icons";
import {
  Card,
  CardHeader,
  Button,
  CardBody,
  Checkbox,
  CardFooter,
  Image,
} from "@nextui-org/react";
import {
  ArrowRightCircleIcon,
  WalletMinimalIcon,
  ArrowLeftRightIcon,
  LandmarkIcon,
  AlertCircleIcon,
} from "lucide-react";
import PaymentMethodModifier from "./payment-method-modifier";

export default function SubmissionSummary({
  agreedToTerms,
  formValidated,
  updateTermAgreement,
  confirmPaymentMethod,
  canSubmitOrder,
  submitOrder,
  paymentMethodSelected,
  paymentMethodConfirmed,
  onSelectPaymentMethod,
}: {
  agreedToTerms: boolean;
  formValidated: boolean;
  updateTermAgreement: any;
  confirmPaymentMethod: any;
  canSubmitOrder: any;
  submitOrder: any;
  paymentMethodSelected: any;
  paymentMethodConfirmed: boolean;
  onSelectPaymentMethod: () => void;
}) {
  // selected payment info = accessed from context

  return (
    <Card
      className="shadow-xl bg-default-100 max-w-md.. mx-auto border"
      radius="lg"
    >
      <CardHeader className="xl:flex flex-col p-6">
        <h3 className="font-medium">Order Summary</h3>

        <div className="hidden xl:block mt-8">
          <Image
            shadow="lg"
            radius="lg"
            width={undefined}
            height={undefined}
            src="https://th.bing.com/th/id/OIP.I89DeQMyCgVqj_eo-QgPYAHaEr?rs=1&pid=ImgDetMain"
            alt=""
            className="hidden md:block object-cover w-full h-[120px] max-w-screen-md.. mb-2"
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
        </div>
      </CardHeader>

      <CardBody className="pt-5 pb-4 px-5">
        <div className="mb-6">
          <p className="flex flex-wrap justify-between items-center gap-x-6 gap-y-2 mb-1.5">
            <span className="inline-flex items-center text-ellipsis gap-x-4 text-sm">
              <WalletMinimalIcon className="inline-flex size-4" /> You'll
              receive:
            </span>
            <span className="text-2xl font-medium text-success..">
              {currencyIcons["NGN"]?.symbol}5000
            </span>
          </p>

          <p className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
            <span className="inline-flex items-center text-ellipsis gap-x-4 text-sm">
              <ArrowLeftRightIcon className="inline-flex size-4" /> Exchange
              Rate:
            </span>{" "}
            <span className="ms-auto lg:text-lg text-success font-medium">
              {currencyIcons["NGN"]?.symbol}1200/
              {currencyIcons["USD"]?.symbol}
            </span>
          </p>

          <PaymentMethodModifier
            methodSelected={paymentMethodSelected}
            onSelectMethod={onSelectPaymentMethod}
          />
        </div>

        <Checkbox
          size="sm"
          radius="sm"
          color="primary"
          className="gap-x-2"
          checked={agreedToTerms}
          classNames={{ icon: "size-4" }}
          onClick={() => updateTermAgreement((consent: boolean) => !consent)}
        >
          I understand errors and attempted fraud may cause delay or refusal of
          payment.
        </Checkbox>

        <Checkbox
          size="sm"
          radius="sm"
          color="primary"
          className="gap-x-2 mt-2"
          checked={paymentMethodConfirmed}
          isDisabled={!paymentMethodSelected}
          classNames={{ icon: "size-4" }}
          onClick={() =>
            confirmPaymentMethod((confirmation: boolean) => !confirmation)
          }
        >
          {!paymentMethodSelected
            ? "Choose Payment Method"
            : "I've confirmed payment method"}
        </Checkbox>
      </CardBody>

      <CardFooter className="flex-col items-start px-5 pb-5 gap-y-2.5">
        <Button
          isDisabled={!canSubmitOrder()}
          size="lg"
          variant="solid"
          color="primary"
          radius="sm"
          fullWidth={true}
          className="border shadow-lg"
          onClick={() => submitOrder()}
        >
          Redeem
        </Button>

        {formValidated ? null : (
          <small className="text-danger-500 self-center text-center flex items-center gap-x-3 px-.5">
            Some Card Details are Missing - Check and provide them
          </small>
        )}
      </CardFooter>
    </Card>
  );
}
