import { Button, Chip, Link, Image } from "@nextui-org/react";
import { ArrowRight, ChevronsRight } from "lucide-react";
import icons from "currency-icons";
import clsx from "clsx";
import PWASectionTitle from "../section-title";

export default function GiftCardEntisementSection() {
  return (
    <div>
      <section className="py-8 px-4">
        <header className="flex justify-between items-center gap-2 mb-4">
          <PWASectionTitle title="Redeem your Giftcards" />
          <Button
            as={Link}
            href="/giftcards"
            variant="light"
            underline
            color="primary"
            className="pe-0"
          >
            See more
          </Button>
        </header>

        <ul className="grid grid-cols-2 overflow-x-auto items-start gap-4 lg:gap-6">
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
                href={`/giftcards/${name}/sell`}
                className="bg-content1 text-white shadow rounded-md p-4 lg:p-5 flex items-center gap-x-5"
              >
                <Image
                  radius="sm"
                  alt="giftcard"
                  classNames={{
                    wrapper: "bg-default-100 hidden lg:block size-14",
                  }}
                />
                <div className="space-y-1 lg:space-y-1.5">
                  <h5 className="text-sm lg:text-base">
                    {name}{" "}
                    <span
                      className={clsx(
                        "text-xs whitespace-nowrap leading-6 font-medium px-2 rounded-xl hidden",
                        `text-${tag.status} bg-${tag.status}-50`
                      )}
                    >
                      {tag.title}
                    </span>
                  </h5>
                  <span className="text-success text-sm font-medium">
                    <span>{`${icons[rate.from]?.symbol} ${rate.value}/${
                      icons[rate.to]?.symbol
                    }`}</span>
                  </span>
                </div>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  className="ms-auto -me-2"
                >
                  <ChevronsRight className="size-4 lg:size-5" />
                </Button>
              </Link>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
