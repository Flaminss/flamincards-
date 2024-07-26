import Link from "next/link";
import { Card } from "@nextui-org/react";

export default function NewsAndPromotionsSection() {
  return (
    <section className="px-4 py-8 space-y-6">
      <h2 className="text-xl lg:text-2xl mb-6">
        Latest News, Trends and Promotions
      </h2>

      {/* CAROUSEL */}
      <Card about="carousel" className="h-[260px] md:h-[320px] w-full" />

      <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-10">
        {[1, 2, 3].map((article) => {
          return (
            <article key={article} className="flex gap-x-2 max-w-[34ch] grow">
              <figure className="w-14 h-12 bg-zinc-800"></figure>
              <Link
                href="/"
                className="underline text-sm xl:text-base underline-offset-2"
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
