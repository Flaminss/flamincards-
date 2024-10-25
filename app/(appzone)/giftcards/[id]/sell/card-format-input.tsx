import { Radio, RadioGroup } from "@nextui-org/react";

export default function GiftCardFormatInput({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <div className="rounded-xl bg-default-100 px-4 py-6">
      <RadioGroup
        label={`Whats the format of your card?`}
        defaultValue="image"
        value={value}
        onValueChange={onValueChange}
        classNames={{
          label: "text-default-600 text-medium mb-1",
        }}
      >
        <Radio value="image">Physical Card / Picture</Radio>
        <Radio value="ecode">E-Code / Mail</Radio>
      </RadioGroup>
    </div>
  );
}
