import clsx from "clsx";
import classnames from "clsx";
import {
  Badge,
  Button,
  Chip,
  Image,
  Listbox,
  ListboxItem,
  ListboxSection,
} from "@nextui-org/react";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  LogOut,
  Bug,
  Bell,
  History,
  Home,
  Share,
  Share2,
  DollarSign,
  LineChart,
  Clapperboard,
  BellIcon,
  GiftIcon,
  ListMusicIcon,
  UserCheckIcon,
  UserIcon,
  UserCheck,
  ChevronRightCircle,
  Gift,
  UserPlus,
  PiggyBank,
} from "lucide-react";
import { BrandName } from "./app-nav";

export default function Sidebar({ className }: { className?: any }) {
  return (
    <aside
      className={clsx(
        className,
        "sidebar-sticky sidebar max-w-52 justify-start overflow-x-hidden rounded-xl border shadow-lg"
      )}
    >
      <div className="h-full overflow-y-auto flex flex-col thin-scrollbar">
        <header className="gap-x-4 justify-between absolute top-0 w-full shadow-sm z-50 border-b p-2 px-4 flex items-center bg-zinc-800.. cardBackground">
          <div className="flex items-center gap-x-1">
            <svg
              fill="none"
              height="42"
              viewBox="0 0 32 32"
              // width="42"
              className="size-10 -ms-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="100%" rx="16" width="100%"></rect>
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <BrandName className="@max-w-20:hidden" />
          </div>

          <Badge
            content={""}
            shape="circle"
            color="danger"
            variant="solid"
            size="sm"
            href="/notifications"
            as={Link}
          >
            <Button
              isIconOnly
              radius="md"
              aria-label="unread notifications count"
              variant="flat"
              size="md"
              className="text-zinc-300"
            >
              <Bell className="size-5" />
            </Button>
          </Badge>
        </header>

        <section className="grow grid py-5 pt-20 pb-16 bg-zinc-950.. cardBackground">
          <Listbox
            aria-label="Applicaitno Menu"
            className="p-0 gap-0 divide-y overflow-visible rounded-md px-2"
            itemClasses={{
              base: "px-2.5 py-3 rounded-md text-default-600 data-[hover=true]:bg-default-100/80",
            }}
          >
            <ListboxItem
              key="dashboard"
              href="/dashboard"
              description=""
              classNames={{
                title: "text-medium ps-1",
              }}
              startContent={<Home className="size-5 text-default-600" />}
            >
              Dashboard
            </ListboxItem>

            {/* <ListboxItem
              hidden
              key="music"
              href="/music"
              description=""
              classNames={{
                title: "text-medium ps-1",
              }}
              startContent={<ListMusicIcon className="" />}
              endContent={
                <Chip variant="flat" color="success" size="sm" radius="md">
                  New
                </Chip>
              }
            >
              Music Store
            </ListboxItem> */}

            <ListboxItem
              key="giftcards"
              href="/giftcards"
              description=""
              classNames={{
                title: "text-medium ps-1",
              }}
              startContent={<GiftIcon className="size-5 text-default-600" />}
            >
              Gift Cards
            </ListboxItem>

            <ListboxItem
              key="transactions"
              href="/transactions"
              description=""
              classNames={{
                title: "text-medium ps-1",
              }}
              startContent={<History className="size-5 text-default-600" />}
            >
              Transactions
            </ListboxItem>
          </Listbox>

          <Listbox
            aria-label="some label goes here"
            classNames={{ list: "px-2 gap-y-3" }}
            itemClasses={{
              base: "px-1 rounded-md shadow-md gap-3 data-[hover=true]:bg-default-100/80",
            }}
          >
            <ListboxItem
              key="earn-rewards"
              description="Earn Rewards and Insentives"
              startContent={
                <span className="p-2 rounded-lg bg-success/10 text-success">
                  <UserPlus className="size-6" />
                </span>
              }
              endContent={
                <ChevronRight className="text-default-400 me-2 text-xl" />
              }
              className="text-success-400 gap-x-3 py-2 bg-success/10"
              classNames={{
                base: "shadow-none",
                description: "text-success-800",
              }}
            >
              Invite friends
            </ListboxItem>

            <ListboxItem
              key="invite-friends"
              description="Keep us alive!"
              startContent={
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  <PiggyBank className="size-6" />
                </span>
              }
              endContent={
                <ChevronRight className="text-default-400 me-2 text-xl" />
              }
              className="text-primary-400 gap-x-3 py-2 bg-primary/10"
              classNames={{
                base: "shadow-none",
                description: "text-primary-800",
              }}
            >
              Sponsor us
            </ListboxItem>
          </Listbox>

          <div className="px-2">
            <Button
              as={Link}
              variant="light"
              size="md"
              radius="sm"
              fullWidth
              className="h-[unset] py-1.5 text-start"
              href="/#faq"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              FAQ
            </Button>

            <Button
              variant="light"
              size="md"
              radius="sm"
              href="/#contact"
              fullWidth
              className="h-[unset] py-1.5 text-start"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              Contact us
            </Button>

            <Button
              variant="light"
              size="md"
              radius="sm"
              // href="/terms"
              fullWidth
              className="h-[unset] py-1.5 text-start"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              Terms and Conditions
            </Button>
          </div>
        </section>

        <Button
          href="/account"
          className="absolute inset-x-0 mt-auto bottom-0 z-20 cardBackground gap-4 py-3 px-4 h-auto border-t rounded-t-none"
          color="primary"
          // variant="bordered"
          startContent={
            <span className="ps-1">
              <UserCheck className="lg:size-7" />
            </span>
            // <Image
            //   alt=""
            //   src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            //   className="size-10 rounded-lg object-cover shadow-sm"
            // />
          }
          endContent={
            <span className="px-2 text-primary">
              <ChevronRightCircle className="size-6" />
            </span>
          }
          as={Link}
        >
          <p className="grow text-start">
            <strong className="text-sm block font-normal">
              Eric Frusciante
            </strong>
            <small className="text-sm text-slate-400">
              eric@frusciante.com{" "}
            </small>
          </p>
        </Button>
      </div>
    </aside>
  );
}

export const IconWrapper = ({
  children,
  className,
}: {
  children: any;
  className?: string;
}) => (
  <div
    className={classnames(
      className,
      "flex items-center rounded-md justify-center w-10 h-10 shrink-0"
    )}
  >
    {children}
  </div>
);

export const ItemCounter = ({ number }: { number?: number }) => (
  <div className="flex items-center gap-1 text-default-400">
    <span className="text-small">{number}</span>
    <ChevronRight className="text-xl" />
  </div>
);
