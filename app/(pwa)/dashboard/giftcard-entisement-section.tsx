import { Button, Chip, Link, Image } from "@nextui-org/react";
import { ArrowRight, ChevronsRight } from "lucide-react";
import icons from "currency-icons";
import clsx from "clsx";

export default function GiftCardEntisementSection() {
  return (
    <div>
      <section className="py-6">
        <header className="px-4 flex justify-between items-center gap-2 mb-4">
          <h2 className="text-xl lg:text-2xl">Sell Your Giftcards</h2>
          <Button
            as={Link}
            href="/giftcards"
            variant="light"
            underline
            color="primary"
            className="pe-0"
          >
            View All
          </Button>
        </header>
        <div className="px-4 mb-8">
          <ul className="grid grid-cols-2 lg:grid-cols-3 overflow-x-auto items-start gap-4">
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
                  title: "Common",
                  status: "primary",
                },
              },
            ].map(({ name, rate, tag }, index) => {
              return (
                <Link
                  key={`${index}#${tag}`}
                  href={`/giftcards/${name}`}
                  className="block text-white shadow rounded-sm p-4 border border-zinc-800"
                >
                  <h5 className="text-medium lg:text-lg flex justify-between mb-1">
                    {name}{" "}
                    <span
                      className={clsx(
                        "text-xs leading-6 font-medium px-2 rounded-xl",
                        `text-${tag.status} bg-${tag.status}-50`
                      )}
                    >
                      {tag.title}
                    </span>
                  </h5>
                  <div className="flex justify-between gap-x-4">
                    <p className="text-success-400 text-sm lg:text-base font-medium flex items-end gap-x-1 align-baseline">
                      <span>{`${icons[rate.from]?.symbol} ${rate.value}/${
                        icons[rate.to]?.symbol
                      }`}</span>
                    </p>

                    <Button
                      isIconOnly
                      variant="light"
                      size="sm"
                      className="h-auto"
                    >
                      <ChevronsRight className="size-4 lg:size-5" />
                    </Button>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
