"use client";

import {
  Tabs,
  Tab,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  Listbox,
  Link,
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
  MusicIcon,
  ChevronsRight,
  MenuIcon,
  GiftIcon,
  CircleDollarSignIcon,
  WifiIcon,
} from "lucide-react";
import { Badge, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Input } from "postcss";

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
    onClose: closeSubMenu,
  } = useDisclosure();

  const menu = [
    {
      title: "Dashboard",
      href: "/dashboard",
      Icon: Home,
    },
    {
      title: "Music",
      href: "/music",
      Icon: MusicIcon,
    },
    {
      title: "Transactions",
      href: "/transactions",
      Icon: History,
    },
    {
      title: "More",
      Icon: MenuIcon,
      list: [
        { Icon: GiftIcon, label: "Sell Gift Cards", href: "/giftcards" },
        {
          Icon: CircleDollarSignIcon,
          label: "Cashout Airdrop Earnings",
          href: "/crypto",
        },
        {
          Icon: WifiIcon,
          label: "Buy Cheap Data & Airtime",
          href: "/bills/internet",
        },
      ],
    },
  ];

  return (
    <>
      {menu.map(({ href, list }, index) => {
        if (!list) return;
        return (
          <Modal
            key={`${href}#${index}`}
            backdrop="blur"
            isOpen={sendableTokenSelectOpened}
            classNames={{
              backdrop: "z-[20000]",
              wrapper: "z-[20000]",
              base: "max-h-[min(80vh,_500px)] rounded-b-none",
            }}
            shadow="lg"
            placement="bottom"
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
                  y: 20,
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
                    {list?.map(({ label, href }) => {
                      return (
                        <Link
                          key={href}
                          href={href}
                          className="py-2 text-white text-medium font-medium rounded-lg flex items-center justify-between"
                          onClick={() => closeSubMenu()}
                        >
                          {label}
                          <ChevronsRight className="size-5" />
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
                      fullWidth
                      onClick={() => closeSubMenu()}
                    >
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        );
      })}
      <Tabs
        color="primary"
        aria-label="Options"
        selectedKey={pathname}
        className={clsx(classNames?.base, "w-full z-28")}
        classNames={{
          base: "!z-[10000]",
          cursor: "hidden",
          tab: "h-auto pt-2.5 max-w-32",
          tabList: clsx(
            classNames?.list,
            "flex p-1.5 gap-4 sm:gap-x-8 justify-center"
          ),
          tabContent: "group-data-[selected=true]:text-primary-500",
          panel: "p-0",
        }}
      >
        {menu.map(({ title, href, Icon, list }) => {
          return (
            <Tab
              key={href}
              href={href ? href : undefined}
              title={
                <div
                  onClick={() => {
                    if (!list) return;
                    openSendableTokenSelect();
                  }}
                  className="text-center text-xs grid gap-x-2 justify-center items-center space-y-1.5 grow max-w-[4ch]"
                >
                  <Icon className="mx-auto" />
                  <span>{title}</span>
                </div>
              }
            ></Tab>
          );
        })}
      </Tabs>
    </>
  );
}
