import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function AccountOverview() {
    const { fullname, bank } = {
        fullname: "Realpaul",
        bank: {
            service: "Opay",
            accountNumber: "1234567890",
            holder: "Osapolo Micheal",
        }
    };

  return (
    <Card className="dark" radius="md">
      <CardHeader className="flex gap-3 items-end bg-dimgray-100">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
          className="bg-slate-200"
        />
        <div className="flex flex-col">
          <p className="text-lg">Welcome, {fullname}</p>
        </div>
      </CardHeader>
      <Divider className="bg-slate-700"/>
      <CardBody>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm">{bank.service}</p>
          <p className="text-4xl">{bank.accountNumber}</p>
          <p className="text-lg font-normal">{bank.holder}</p>
        </div>
      </CardBody>
      {/* 
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}