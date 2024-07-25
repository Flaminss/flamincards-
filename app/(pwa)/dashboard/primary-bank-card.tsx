import { Button, Divider } from "@nextui-org/react";

export default function PrimaryBankCard() {
  return (
    <div className="grid gap-y-1 max-w-md w-full mx-auto">
      <article className="relative border border-slate-800.. shadow-md p-4 sm:p-5 lg:p-4">
        <div className="flex gap-x-2.5 items-center mb-2">
          <div className="inline-flex items-center">
            <div className="h-4 w-4 rounded-full bg-warning-400"></div>
            <div className="h-4 w-4 rounded-full bg-danger-400 -ms-1.5"></div>
          </div>
          <span className="text-sm text-zinc-400 uppercase font-mono">
            Primary Bank
          </span>
        </div>
        <p className="text-xl font-medium mb-1">1234 2342 2422</p>
        <p className="text-medium font-mono flex items-center justify-between gap-x-4">
          <span>John Doe</span>
          <span className="text-sm">09/10</span>
        </p>
        <Button
          variant="light"
          color="success"
          size="sm"
          radius="sm"
          className="text-xs absolute top-2 right-2"
        >
          Edit
        </Button>
      </article>
      <Divider className="w-[90%] mx-auto block border" />
      <Divider className="w-[80%] mx-auto block border" />
    </div>
  );
}
