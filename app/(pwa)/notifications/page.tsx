"use client";

import { Tabs, Tab } from "@nextui-org/react";
import TransactionReads from "./transaction-reads";
import InboxReads from "./inbox-reads";
import CampaignReads from "./campaign-reads";
import PWAPageTitle from "../page-title";

const menu = [
  { title: "Transactions", unread: 0, render: () => <TransactionReads /> },
  { title: "Messages", unread: 0, render: () => <InboxReads /> },
  { title: "Promotions", unread: 4, render: () => <CampaignReads /> },
];

export default function NotificationsPage() {
  return (
    <div>
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Notifications" />
      </header>

      <Tabs
        variant="underlined"
        size="lg"
        aria-label="something"
        className="mb-6"
        classNames={{
          base: "px-2",
          tab: "sm:text-lg",
          panel: "px-0",
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
                    <span className="ms-2 badge badge-sm badge-flat-danger">
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
    </div>
  );
}
