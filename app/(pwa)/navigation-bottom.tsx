"use client";

import {
  Tabs,
  Tab,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  Listbox,
  ModalBody,
  ModalFooter,
  ListboxItem,
  useDisclosure,
} from "@nextui-org/react";
import {
  Home,
  CandlestickChart,
  History,
  Menu,
  SearchIcon,
} from "lucide-react";
import { Badge, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Input } from "postcss";
import Link from "next/link";

export default function BottomNavigationPro({
  classNames,
}: {
  classNames?: {
    base: any;
    list: any;
  };
}) {
  const pathname = usePathname();
  const {
    isOpen: sendableTokenSelectOpened,
    onOpen: openSendableTokenSelect,
    onOpenChange: onSendableTokenSelectChange,
  } = useDisclosure();

  const menu = [
    {
      title: "Dashboard",
      href: "/dashboard",
      Icon: Home,
      notificationCount: 0,
    },
    {
      title: "Market",
      Icon: CandlestickChart,
      notificationCount: 2,
      list: ["Giftcard", "Airtime"],
    },
    {
      title: "Transactions",
      href: "/transactions",
      Icon: History,
      notificationCount: 0,
    },
    {
      title: "More",
      href: "/account",
      Icon: Menu,
      notificationCount: 0,
    },
  ];

  return (
    <Tabs
      color="primary"
      aria-label="Options"
      selectedKey={pathname}
      className={clsx(classNames?.base, "w-full z-30")}
      classNames={{
        cursor: "hidden",
        tab: "h-auto pt-2.5",
        tabList: clsx(classNames?.list, "flex p-1.5 gap-4"),
        tabContent: "group-data-[selected=true]:text-primary-500",
      }}
    >
      {menu.map(({ title, href, Icon, list, notificationCount }) => {
        return (
          <Tab
            key={href}
            href={href}
            onClick={() => {
              alert("hello marketplace");
              // if (!menu) {
              //   return;
              // }

              // openSendableTokenSelect();
            }}
            title={
              <div className="text-center text-xs grid sm:flex gap-x-2 justify-center items-center space-y-1 grow max-w-[4ch]">
                <Icon className="mx-auto" />
                <span>{title}</span>
              </div>
            }
          >
            {list?.length === 0 ? null : (
              <Modal
                backdrop="blur"
                isOpen={sendableTokenSelectOpened}
                classNames={{
                  backdrop: "z-[100]",
                  wrapper: "z-[110]",
                  base: "border max-h-[min(80vh,_500px)]",
                }}
                shadow="lg"
                onOpenChange={onSendableTokenSelectChange}
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    },
                    exit: {
                      y: -20,
                      opacity: 0,
                      transition: {
                        duration: 0.2,
                        ease: "easeIn",
                      },
                    },
                  },
                }}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 py-6">
                        Explore Our Marketplace
                      </ModalHeader>
                      <ModalBody>
                        {list?.map((item) => {
                          return (
                            <Link
                              href="/"
                              className="flex items-center justify-between text-lg"
                            >
                              {item}
                            </Link>
                          );
                        })}
                      </ModalBody>
                      <ModalFooter className="flex-col text-sm text-gray-600 text-center justify-center">
                        <Button
                          variant="solid"
                          color="danger"
                          size="lg"
                          radius="sm"
                          className="w-full"
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            )}
          </Tab>
        );
      })}
    </Tabs>
  );
}
