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
} from "lucide-react";
import PaymentMethodModifier from "./payment-method-modifier";

export default function SubmissionSummary({
  agreedToTerms,
  updateTermAgreement,
  canSubmitOrder,
  submitOrder,
}: {
  agreedToTerms: boolean;
  updateTermAgreement: any;
  canSubmitOrder: any;
  submitOrder: any;
}) {
  // selected payment info = accessed from context

  return (
    <div className="md:pt-6 grow w-full lg:max-w-xl xl:max-w-sm">
      <Card
        className="shadow-xl cardBackground max-w-md mx-auto border"
        radius="lg"
      >
        <CardHeader className="hidden xl:flex flex-col p-6">
          {/* <h3 className="mb-8 text-lg">
            Order Summary
          </h3> */}

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

            <PaymentMethodModifier />
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
            I understand errors and attempted fraud may cause delay or refusal
            of payment.
          </Checkbox>
        </CardBody>

        <CardFooter className="flex-col items-start px-5 pb-5 gap-y-8">
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
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
