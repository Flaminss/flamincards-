import React from "react";
import PWASectionTitle from "../section-title";

export default function MiscellaneousSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8">
      <header>
        <header className="flex justify-between items-center gap-2 mb-4 px-4">
          <PWASectionTitle title={title} />
        </header>
      </header>
      {children}
    </section>
  );
}
