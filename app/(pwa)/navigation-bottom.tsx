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
  ChevronRightCircleIcon,
  UserPlusIcon,
  Gift,
  ShieldCheckIcon,
} from "lucide-react";
import { Badge, Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Input } from "postcss";
import { Span } from "next/dist/trace";

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
      title: "GiftCard",
      href: "/giftcards",
      Icon: Gift,
    },
    {
      title: "More",
      Icon: MenuIcon,
      list: [
        {
          Icon: ShieldCheckIcon,
          label: "Buy USDT",
          href: "/crypto",
        },
        {
          Icon: CircleDollarSignIcon,
          label: "Withdrawl Airdrop Earnings",
          href: "/crypto",
        },
        {
          Icon: WifiIcon,
          label: "Buy Cheap Data & Airtime",
          href: "/bills/internet",
          disabled: true,
        },
        {
          Icon: UserPlusIcon,
          label: "Invite Friends",
          description: "Stand a chance to earn rewards",
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
            className="cardBackground h-auto"
            radius="lg"
            size="full"
            classNames={{
              backdrop: "z-[20000] md:hidden",
              wrapper: "z-[20000] md:hidden",
              base: "rounded-b-none",
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
            hideCloseButton
          >
            <ModalContent>
              {(onClose) => (
                <>
                  {/* <ModalBody className="py-4 px-4 gap-y-3"> */}
                  <ModalBody className="py-4 px-4 flex flex-row flex-wrap gap-4">
                    {list?.map(
                      ({ label, Icon, href, description, disabled }) => {
                        return (
                          <Button
                            as={Link}
                            key={href}
                            href={href}
                            size="lg"
                            isDisabled={disabled}
                            className="text-white rounded-lg gap-x-4 justify-normal px-3.5 py-3 h-auto flex-col gap-y-3 text-xs max-w-[28ch].. grow whitespace-normal text-center"
                            onClick={() => closeSubMenu()}
                            startContent={<Icon className="size-6 shrink-0" />}
                          >
                            {!description ? (
                              label
                            ) : (
                              <div className="grid gap-y-1">
                                <span>{label}</span>
                                <span className="block text-xs text-zinc-400 text-ellipsis text-nowrap">
                                  {description}
                                </span>
                              </div>
                            )}
                          </Button>
                        );
                      }
                    )}
                    {/* {list?.map(
                      ({ label, Icon, href, description, disabled }) => {
                        return (
                          <Button
                            as={Link}
                            key={href}
                            href={href}
                            size="lg"
                            variant="light"
                            isDisabled={disabled}
                            className="text-white text-medium rounded-lg gap-x-4 justify-normal px-3.5 py-3 h-auto"
                            onClick={() => closeSubMenu()}
                            startContent={
                              <Icon className="size-6 text-primary.. shrink-0" />
                            }
                            endContent={
                              <ChevronsRight className="ms-auto size-4 shrink-0" />
                            }
                          >
                            {!description ? (
                              label
                            ) : (
                              <div className="grid gap-y-.5">
                                <span>{label}</span>
                                <span className="block text-sm text-zinc-400 text-ellipsis text-nowrap">
                                  {description}
                                </span>
                              </div>
                            )}
                          </Button>
                        );
                      }
                    )} */}
                  </ModalBody>
                  <ModalFooter className="px-4">
                    <Button
                      size="lg"
                      radius="sm"
                      fullWidth
                      color="primary"
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
