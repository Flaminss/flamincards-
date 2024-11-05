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
  Spinner,
} from "@nextui-org/react";
import {
  ArrowRightCircleIcon,
  WalletMinimalIcon,
  ArrowLeftRightIcon,
  LandmarkIcon,
  AlertCircleIcon,
  AlertTriangleIcon,
} from "lucide-react";
import PaymentMethodModifier from "./payment-method-modifier";
import clsx from "clsx";

export default function SubmissionSummary({
  isSubmitting,
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
  isSubmitting: boolean;
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
      radius="md"
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
        </div>

        <div className="mb-6">
          <PaymentMethodModifier
            methodSelected={paymentMethodSelected}
            onSelectMethod={onSelectPaymentMethod}
          />
        </div>

        <Checkbox
          size="sm"
          className="gap-x-2"
          isSelected={agreedToTerms}
          onValueChange={() =>
            updateTermAgreement((consent: boolean) => !consent)
          }
        >
          I understand errors and attempted fraud may cause delay or refusal of
          payment.
        </Checkbox>

        <Checkbox
          size="sm"
          className="gap-x-2 mt-2"
          isSelected={paymentMethodConfirmed}
          isDisabled={!paymentMethodSelected}
          onValueChange={() =>
            confirmPaymentMethod((confirmation: boolean) => !confirmation)
          }
        >
          I've confirmed payment method
        </Checkbox>
      </CardBody>

      <CardFooter className="flex-col items-start px-5 pb-5 gap-y-2.5">
        {formValidated ? null : (
          <small className="text-warning text-sm text-center.. block w-full">
            Some card details are missing. Please check and provide them to
            continue
          </small>
        )}

        <Button
          isDisabled={!canSubmitOrder()}
          size="lg"
          variant="solid"
          color="primary"
          radius="sm"
          fullWidth={true}
          className={clsx("border shadow-lg uppercase", {
            "bg-default": isSubmitting,
          })}
          onClick={() => submitOrder()}
          isLoading={isSubmitting}
          spinner={<Spinner size="sm" color="warning" />}
        >
          Redeem
        </Button>
      </CardFooter>
    </Card>
  );
}
