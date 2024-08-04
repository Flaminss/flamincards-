import Link from "next/link";
import { Card } from "@nextui-org/react";
import PWASectionTitle from "../section-title";

export default function NewsAndPromotionsSection() {
  return (
    <section className="px-4 py-8 space-y-6">
      {/* <h2 className="text-xl lg:text-2xl mb-6">
        Latest News, Trends and Promotions
      </h2> */}

      <PWASectionTitle title="Latest News, Trends and Promotions" />

      {/* CAROUSEL */}
      <Card about="carousel" className="h-[260px] md:h-[320px] w-full" />

      <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-10">
        {[1, 2, 3].map((article) => {
          return (
            <article
              key={article}
              className="flex items-center gap-x-4 sm:max-w-[34ch] grow"
            >
              <figure className="w-16 h-12 bg-content1"></figure>
              <Link
                href="/"
                className="underline text-medium xl:text-base underline-offset-2"
              >
                Jagaban set the Nation on Haster Tonight!
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
