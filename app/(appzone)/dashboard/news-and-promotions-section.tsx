import Link from "next/link";
import { Card } from "@nextui-org/react";
import PWASectionTitle from "../section-title";

export default function NewsAndPromotionsSection() {
  return (
    <section className="px-4 py-8">
      <PWASectionTitle title="Latest News, Trends and Promotions" />

      <Card about="carousel" className="h-[260px] md:h-[320px] w-full mt-4 mb-6" />

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
                {article === 1
                  ? "Top 10 Nigerian Movies to Watch This Year"
                  : article === 2
                  ? "How to Participate in the Latest Crypto Airdrops"
                  : "Nigerian Music Artists Making Waves in 2023"}
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
