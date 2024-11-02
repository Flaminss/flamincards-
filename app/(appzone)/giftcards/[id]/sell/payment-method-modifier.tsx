import { Button } from "@nextui-org/react";
import { LandmarkIcon } from "lucide-react";

export default function PaymentMethod({
  methodSelected,
  onSelectMethod,
}: {
  methodSelected: boolean;
  onSelectMethod: () => void;
}) {
  return (
    <div className="mb-4 mt-2 flex">
      <span className="me-4">
        <LandmarkIcon className="inline-flex size-4" />
      </span>
      <div className="w-full flex flex-wrap justify-between gap-x-4 gap-y-2">
        {!methodSelected ? (
          <>
            <h5 className="text-sm self-center">Payment Method</h5>{" "}
            <Button
              size="sm"
              color="warning"
              variant="light"
              className="ms-auto"
              onClick={() => onSelectMethod()}
            >
              Choose
            </Button>
          </>
        ) : (
          <>
            <h5 className="flex-grow text-sm text-zinc-200">
              <p>Sunday Awanu Paul</p>
              <p className="text-default-400">Palmpay (99****1202)</p>
            </h5>

            <Button
              size="sm"
              color="primary"
              variant="light"
              onClick={() => onSelectMethod()}
            >
              Change
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
