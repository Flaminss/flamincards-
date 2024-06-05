"use client";

import { Tabs, Tab } from "@nextui-org/react";
import PaymentReads from "./payment-reads";
import InboxReads from "./inbox-reads";
import ActivityReads from "./activity-reads";

export default function NotificationsPage() {
  const menu = [
    { title: "Inbox", unread: 0, render: () => <InboxReads /> },
    { title: "Payments", unread: 0, render: () => <PaymentReads /> },
    { title: "News & Giveaways", unread: 4, render: () => <ActivityReads /> },
  ];
  return (
    <div>
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl">Notifications</h1>
      </header>

      <div className="flex">
        <section>
          <Tabs
            variant="underlined"
            size="lg"
            aria-label="something"
            className="mb-6"
            classNames={{
              base: "px-2",
              tab: "text-lg",
            }}
          >
            {menu.map(({ title, unread, render }, index) => {
              return (
                <Tab
                  key={index}
                  title={
                    <div className="flex items-center">
                      {title}{" "}
                      {!unread ? null : (
                        <span className="ms-2 badge badge-flat-primary">
                          {unread}
                        </span>
                      )}
                    </div>
                  }
                >
                  {!render ? null : render()}
                </Tab>
              );
            })}
          </Tabs>
        </section>

        <section className="mt-20 border w-full max-w-72 mx-auto overflow-hidden shadow-lg object-contain h-screen">
          <p className="p-6 text-center text-lg font-medium">
            Contact us to place an advert
          </p>
        </section>
      </div>
    </div>
  );
}
