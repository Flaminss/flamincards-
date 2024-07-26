import { Button, Chip, Link } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import icons from "currency-icons";

export default function GiftCardEntisementSection() {
  return (
    <div>
      <section className="py-6">
        <header className="px-4 flex justify-between items-center gap-2 mb-4">
          <h2 className="text-lg font-semibold">Redeem/Sell Giftcards</h2>
          <Button variant="light" color="primary" className="pe-0">
            View All
          </Button>
        </header>
        <div className="px-4 mb-8">
          <ul className="flex flex-wrap overflow-x-auto items-start gap-4">
            {[
              {
                name: "Steam",
                rate: {
                  value: 1400,
                  from: "NGN",
                  to: "USD",
                },
                tag: {
                  title: "Hot",
                  status: "danger",
                },
              },
              {
                name: "Appple Pay",
                rate: {
                  value: 1400,
                  from: "NGN",
                  to: "USD",
                },
                tag: {
                  title: "Low Rate",
                  status: "warning",
                },
              },
              {
                name: "Steam",
                rate: {
                  value: 1400,
                  from: "NGN",
                  to: "USD",
                },
                tag: {
                  title: "Low Rate",
                  status: "success",
                },
              },
              {
                name: "Steam",
                rate: {
                  value: 1400,
                  from: "NGN",
                  to: "USD",
                },
                tag: {
                  title: "Low Rate",
                  status: "success",
                },
              },
            ].map(({ name, rate, tag }, index) => {
              return (
                <li
                  key={`${index}#${tag}`}
                  className="border rounded-lg px-3 py-2.5 min-h-12 grow max-w-[50%] min-w-32"
                >
                  <div className="relative">
                    <Image
                      src=""
                      alt=""
                      className="dark:bg-gray-900 h-20 mb-2 rounded-sm border-none w-full"
                    />
                    <Chip
                      variant="solid"
                      color={tag.status as any}
                      radius="none"
                      size="sm"
                      className="absolute top-1 right-1"
                    >
                      {tag.title}
                    </Chip>
                  </div>
                  <h5 className="text-base font-medium">{name}</h5>
                  <p className="text-success-400 text-sm flex items-end gap-x-1 align-baseline">
                    <span>🔥</span>
                    <span>{`${icons[rate.from]?.symbol}${rate.value}/${
                      icons[rate.to]?.symbol
                    }`}</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <Link
          color="primary"
          size="lg"
          underline="always"
          className="mx-auto flex gap-x-2 items-center w-max"
        >
          See more cards at the market <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
