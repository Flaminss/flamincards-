import { ArrowRightCircleIcon } from "lucide-react";
import { Button } from "@nextui-org/react";

const servicesList = [
  {
    title: "Sell your GIftcards",
    href: "/giftcard",
    color: "primary",
  },
  {
    title: "Airdrop Earnings Withdrawl",
    href: "/crypto",
    color: "warning",
  },
  {
    title: "Recieve with reliable $cashtag",
    href: "/crypto",
    color: "danger",
  },
  {
    title: "Buy Cheap Data Plans",
    href: "/crypto",
    color: "success",
  },
  {
    title: "Download Free Instrumentals",
    href: "/crypto",
    color: "secondary",
  },
];

export default function ServicesOfferedSection() {
  return (
    <section className="px-4 py-8">
      <h2 className="text-xl lg:text-2xl mb-6">Our Services</h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 items-center gap-4">
        {servicesList.map(({ title, href, color }, index) => {
          return (
            <Button
              key={href}
              href={href}
              variant="light"
              size="lg"
              className={`border items-center self-stretch h-auto w-auto text-white py-4 text-sm md:text-medium justify-between gap-x-4 rounded-none ${
                index === 0
                  ? "lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:h-full"
                  : ""
              }`}
            >
              <span className="whitespace-break-spaces text-start">
                {title}
              </span>
              <Button
                isIconOnly
                variant="light"
                size="sm"
                color="primary"
                className={`ms-auto ${index === 0 ? "lg:ms-0" : ""}`}
              >
                <ArrowRightCircleIcon />
              </Button>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
