"use client";

import { Tabs, Tab } from "@nextui-org/react";

export default function ActivityPage() {
  const menu = [
    { title: "Transfers", unread: 0 },
    { title: "News and Giveaways", unread: 4 },
  ];
  return (
    <div className="pt-4">
      <Tabs
        variant="underlined"
        aria-label="Tabs variants"
        classNames={{
          tabList: "flex",
          tab: "grow"
        }}
      >
        {menu.map(({ title, unread }, index) => {
          return (
            <Tab
              key={index}
              title={
                <div className="flex items-center">
                  {title}{" "}
                  {!unread ? (
                    0
                  ) : (
                    <span className="ms-2 badge badge-flat-primary">
                      {unread}
                    </span>
                  )}
                </div>
              }
            />
          );
        })}
      </Tabs>
    </div>
  );
}
