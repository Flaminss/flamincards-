import clsx from "clsx";
import { Badge, Button, Chip, Listbox, ListboxItem } from "@nextui-org/react";
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
} from "lucide-react";
import { BrandName } from "./navigation-top";

export default function NavigationLeft({ className }: { className?: any }) {
  return (
    <aside
      className={clsx(
        "@container",
        className,
        "sidebar-sticky sidebar max-w-52 justify-start overflow-x-hidden rounded-xl"
      )}
    >
      <div className="h-full overflow-y-auto flex flex-col">
        <header className="gap-x-4 justify-between sticky top-0 shadow-sm z-20 border-b p-2 flex items-center bg-zinc-800">
          <div className="flex items-center gap-x-1">
            <svg
              fill="none"
              height="42"
              viewBox="0 0 32 32"
              width="42"
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
          <Link href="/notifications">
            <Button
              className="min-w-[unset] h-auto p-2"
              size="md"
              radius="sm"
              variant="flat"
              // color="primary"
            >
              <Badge
                content={6}
                // isInvisible={true}
                size="md"
                color="warning"
                showOutline={false}
                className="font-medium"
              >
                <Bell className="text-base" />
              </Badge>
            </Button>
          </Link>
        </header>
        <section className="grow grid gap-y-4 h-full py-5 mb-16">
          <Listbox
            aria-label="Applicaitno Menu"
            // onAction={(key) => alert(key)}
            className="p-0 gap-0 divide-y overflow-visible rounded-md px-2"
            itemClasses={{
              base: "px-3 py-3 rounded-md shadow-md text-lg gap-3 data-[hover=true]:bg-default-100/80",
            }}
          >
            <ListboxItem
              key="dashboard"
              href="/dashboard"
              classNames={{
                base: "gap-x-4 py-3 px-2",
                title: "text-base",
              }}
              startContent={
                // <IconWrapper className="bg-success/10 text-success p-1">
                // <IconWrapper className="bg-default/50 text-foreground">
                <Home className="" />
              }
            >
              Dashboard
            </ListboxItem>
            <ListboxItem
              key="actions"
              href={`/market/${marketMenu.giftcard.path}`}
              classNames={{
                base: "gap-x-4 py-3 px-2",
                title: "text-base",
              }}
              startContent={
                // <IconWrapper className="bg-warning/10 text-warning">
                // <IconWrapper className="bg-default/50 text-foreground">
                //   <LineChart className="text-lg " />
                // </IconWrapper>
                <LineChart className="" />
              }
            >
              Marketplace
            </ListboxItem>
            <ListboxItem
              key="actions"
              href={`/market/${marketMenu.giftcard.path}`}
              classNames={{
                base: "gap-x-4 py-3 px-2",
                title: "text-base",
              }}
              startContent={
                // <IconWrapper className="bg-warning/10 text-warning">
                // <IconWrapper className="bg-default/50 text-foreground">
                //   <LineChart className="text-lg " />
                // </IconWrapper>
                <Clapperboard className="" />
              }
            >
              Your Library{" "}
              {/* <Chip
                variant="flat"
                color="success"
                className="ms-2"
                size="sm"
                radius="md"
              >
                New
              </Chip> */}
            </ListboxItem>
            <ListboxItem
              key="transactions"
              href="/transactions"
              classNames={{
                base: "gap-x-4 py-3 px-2",
                title: "text-base",
              }}
              startContent={<History className="text-lg " />}
            >
              Transactions History
            </ListboxItem>
            {/* <ListboxItem
              key="license"
              endContent={
                <span className="text-small text-default-400">MIT</span>
              }
              startContent={
                <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
                  <Bell />
                </IconWrapper>
              }
            >
              License
            </ListboxItem> */}
          </Listbox>

          {/* <Listbox
            aria-label="application Menu"
            onAction={(key) => alert(key)}
            className="p-0 gap-0 divide-y overflow-visible rounded-md px-2 mt-auto"
            itemClasses={{
              base: "px-1 rounded-md shadow-md gap-3 data-[hover=true]:bg-default-100/80",
            }}
          >
            <ListboxItem
              key="invite-friends"
              description="Earn Rewards and Insentives"
              startContent={
                <IconWrapper className="bg-success/10 text-success">
                  <Share2 />
                </IconWrapper>
              }
              endContent={
                <ChevronRight className="text-default-400 me-2 text-xl" />
              }
              className="text-success-400"
              classNames={{
                base: "shadow-none",
                description: "text-success-800",
              }}
            >
              Share with friends
            </ListboxItem>
            <ListboxItem
              key="sponsor"
              description="Keep us alive. Empower our future"
              startContent={
                // <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
                <IconWrapper className="bg-primary/10 text-primary">
                  <DollarSign />
                </IconWrapper>
              }
              endContent={
                <ChevronRight className="text-default-400 me-2 text-xl" />
              }
              className="text-primary-400"
              classNames={{
                base: "shadow-none",
                description: "text-primary-800",
              }}
            >
              Sponsor us
            </ListboxItem>
          </Listbox> */}

          <div className="px-2 mt-4">
            <Button
              variant="light"
              size="md"
              fullWidth
              className="text-start"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              Sponsor Us
            </Button>
            <Button
              variant="light"
              size="md"
              fullWidth
              className="text-start"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              Get Help
            </Button>
            <Button
              variant="light"
              size="md"
              fullWidth
              className="text-start"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              Terms and Conditions
            </Button>
          </div>

          <div className="px-2 mt-auto py-6">
            <article className="border rounded-lg p-4 bg-primary-950">
              <header className="mb-4">
                <GiftIcon className="mb-2 text-primary-400" />
                <h2 className="text-lg text-primary-900">
                  Invite and Earn with Friends!
                </h2>
                <p className="text-gray-500 text-sm">
                  Stand a chance to win rewards and prizes!
                </p>
              </header>
              <div className="card-footer">
                <Button
                  variant="flat"
                  size="md"
                  fullWidth
                  color="primary"
                  radius="sm"
                >
                  Share invitation link{" "}
                  <Share2 className="text-base" size={18} />
                </Button>
              </div>
            </article>
          </div>

          {/* <div className="px-2 mt-4">
            <Button
              variant="light"
              size="md"
              fullWidth
              className="text-start"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              Sponsor Us
            </Button>
            <Button
              variant="light"
              size="md"
              fullWidth
              className="text-start"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              Get Help
            </Button>
            <Button
              variant="light"
              size="md"
              fullWidth
              className="text-start"
              endContent={
                <ChevronRight size={16} className="ms-auto text-gray-600" />
              }
            >
              Terms and Conditions
            </Button>
          </div> */}
        </section>
        <footer className="absolute inset-x-0 mt-auto bottom-0 flex flex-wrap items-center gap-2 p-2 z-20 bg-zinc-800">
          <Button
            href="/account" 
            className="gap-2 p-2 h-auto grow justify-start rounded-lg border"
            variant="faded"
            startContent={
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="size-10 rounded-lg object-cover shadow-sm"
              />
            }
            endContent={<ChevronRight size="18" />} 
            as={Link}
          >
            <p className="grow text-start">
              <strong className="text-sm block font-medium">
                Eric Frusciante
              </strong>
              <small className="text-sm text-slate-400">
                eric@frusciante.com{" "}
              </small>
            </p>
          </Button>
          <Button
            isIconOnly
            variant="faded"
            aria-label="logout"
            color="danger"
            className="rounded-md border h-auto self-stretch text-danger-400.."
          >
            <LogOut size="18" />
          </Button>
        </footer>
      </div>
    </aside>
  );
}

import classnames from "clsx";
import { marketMenu } from "./(marketplace)/layout";

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
