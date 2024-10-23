import { Input, Button } from "@nextui-org/react";

type AmountInputProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export default function AmountInput({
  value,
  onValueChange,
}: AmountInputProps) {
  return (
    <Input
      type="number"
      label="Amount (#)"
      radius="md"
      size="lg"
      value={value}
      placeholder="0"
      onValueChange={onValueChange}
      classNames={{
        input: "remove-browser-input-counter",
      }}
      endContent={
        <div className="flex gap-x-2 items-center">
          <Button
            size="md"
            radius="sm"
            onClick={() => {
              onValueChange(((parseInt(value) || 0) - 5).toString());
            }}
            className="px-2.5 min-w-[unset] text-base font-semibold items-center hover:border-2"
          >
            <span className="text-xl text-primary leading-none">-</span>5
          </Button>

          <Button
            size="md"
            radius="sm"
            onClick={() => {
              onValueChange(((parseInt(value) || 0) + 5).toString());
            }}
            className="px-2.5 min-w-[unset] text-base font-semibold items-center hover:border-2"
          >
            <span className="text-xl text-primary leading-none">+</span>5
          </Button>
        </div>
      }
    />
  );
}
