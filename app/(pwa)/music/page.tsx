"use client";

import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import icons from "currency-icons";
import Link from "next/link";
import clsx from "clsx";

import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import {
  ArrowUpDown,
  EllipsisVerticalIcon,
  PlayCircleIcon,
  SearchIcon,
  Trash2Icon,
  VerifiedIcon,
} from "lucide-react";
import GiftcardListing from "@/app/(pwa)/giftcards/listing";
import ComingSoonScene from "../transactions/page";

const sortOrders = [
  { key: "Popular", icon: "🔥", title: "Hottest" },
  { key: "Newest", icon: "💰", title: "Most relevant" },
  { key: "A-Z", icon: "📉", title: "Lowest to High Cost" },
  { key: "Z-A", icon: "📉", title: "High to Lowest Cost" },
  { key: "Lowest Price", icon: "📉", title: "High to Lowest Cost" },
  { key: "Highest Price", icon: "📉", title: "High to Lowest Cost" },
];

// Paid // Free Filter

const instrumentalList = [
  {
    id: "steam",
    title: "Steam",
    imageUri: "/images/fruit-1.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "google-play",
    title: "Google Play",
    imageUri: "/images/fruit-2.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "amazon",
    title: "Amazon",
    imageUri: "/images/fruit-3.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "itunes",
    title: "iTunes",
    imageUri: "/images/fruit-4.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "apple",
    title: "Apple",
    imageUri: "/images/fruit-5.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "ebay",
    title: "Ebay",
    imageUri: "/images/fruit-6.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "american-express",
    title: "American Express",
    imageUri: "/images/fruit-7.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "razer-gold",
    title: "Razer Gold",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "visa",
    title: "Visa",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "xbox",
    title: "Xbox",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "best-buy",
    title: "Best Buy",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "addidas",
    title: "Addidas",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "playstation",
    title: "Playstation",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "roblox",
    title: "Roblox",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "walmart",
    title: "Walmart",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "nike",
    title: "Nike",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "sephora",
    title: "Sephora",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
  {
    id: "footlocker",
    title: "Footlocker",
    imageUri: "/images/fruit-8.jpeg",
    rate: {
      value: 1400,
      from: "NGN",
      to: "USD",
    },
  },
];

export default function InstrumentalCatalogPage() {
  const multipleCardSelection = [
    {
      key: 1,
      artworkUri: "",
      preview: "",
      name: "Hello there",
      duration: "02:00",
      bmp: "180",
    },
    {
      key: 2,
      artworkUri: "",
      preview: "",
      name: "Hello there",
      duration: "02:00",
      bmp: "180",
    },
    {
      key: 3,
      artworkUri: "",
      preview: "",
      name: "Hello there",
      duration: "02:00",
      bmp: "180",
    },
  ];

  // return <ComingSoonScene />;
  return (
    <>
      <section className="mb-6">
        <div className="px-3 md:px-2 flex mb-4 items-center gap-x-4 pt-4">
          <Input
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "max-w-md",
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Search by keywords, genres, artist, instruments, key..."
            startContent={
              <SearchIcon
                className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 me-1"
                size={16}
              />
            }
          />

          <div className="flex items-center">
            <Select
              startContent={<ArrowUpDown />}
              defaultSelectedKeys={["all"]}
              classNames={{
                trigger: "pe-8",
                innerWrapper: "w-auto",
              }}
            >
              {sortOrders.map(({ icon, title, key }) => {
                return (
                  <SelectItem key={key} value={key} startContent={icon}>
                    {title}
                  </SelectItem>
                );
              })}
            </Select>
          </div>
        </div>
        <article className="flex overflow-x-hidden items-center bg-zinc-900 rounded-full py-1.5">
          <h4 className="py-2 px-4 text-primary-400 font-semibold">
            Applied Filters:{" "}
          </h4>
          <ul className="flex items-center gap-x-2">
            {[
              { name: "Afro" },
              { name: "Hip-hop" },
              { name: "Ibile" },
              { name: "Pop" },
              { name: "Rap" },
            ].map(({ name }) => {
              return (
                <Chip
                  key={name}
                  className="rounded-full"
                  onClose={() => alert("removed filter")}
                >
                  {name}
                </Chip>
              );
            })}
          </ul>
          <Button variant="light" color="danger" size="md" className="ms-auto">
            Clear all
          </Button>
        </article>
      </section>
      <Table
        isHeaderSticky
        aria-label="Example table with custom cells, pagination and sorting"
        className="mb-8"
        classNames={{
          wrapper: "max-h-[382px]",
        }}
      >
        <TableHeader
          columns={[
            { name: "Preview", uid: "previewAction" },
            { name: "Artwork", uid: "artworkUri" },
            { name: "Name", uid: "name" },
            { name: "Durations", uid: "duration" },
            { name: "BMP", uid: "bmp" },
            { name: "", uid: "buyAction" },
            { name: "", uid: "moreAction" },
          ]}
        >
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          emptyContent={"There are currently no muscs in the Catalog."}
          items={[
            ...multipleCardSelection,
            // {
            //   key: 0,
            //   amount: multipleCardSelection.reduce(
            //     (accumulator, value) => {
            //       return accumulator + value.amount;
            //     },
            //     0
            //   ),
            //   quantity: multipleCardSelection.reduce(
            //     (accumulator, value) => {
            //       return accumulator + value.quantity;
            //     },
            //     0
            //   ),
            //   value: 0,
            // },
          ]}
        >
          {(item) => (
            <TableRow
              key={item.key}
              className={clsx({
                "text-primary !font-semibold !text-base": item.key === 0,
              })}
            >
              {(columnKey) => (
                <TableCell>
                  {columnKey.toString().includes("Action")
                    ? (getActionIcon(item, columnKey) as any)
                    : getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

function getActionIcon(item: any, columnKey: any): { [k: string]: any } {
  return (
    {
      previewAction: (
        <Button
          radius="full"
          color="primary"
          className="p-2 min-w-[unset]"
          size="sm"
        >
          <PlayCircleIcon />
        </Button>
      ),
      buyAction: (
        <Button
          size="sm"
          color="primary"
          radius="lg"
          className="justify-self-end"
        >
          Buy
        </Button>
      ),
      moreAction: <EllipsisVerticalIcon />,
    } as any
  )[columnKey];
}

function OldMusicListing() {
  return {
    /* <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 px-4 md:px-2">
      {instrumentalList.map(({ id, title, imageUri, rate }, index) => (
        <Link
          key={index}
          href={`/market/giftcard/sell/${id}`}
          className="min-w-72.."
        >
          <Card shadow="lg">
            <CardBody className="overflow-visible p-0">
              <div className="flex gap-x-2 p-4">
                <Image
                  shadow="lg"
                  radius="sm"
                  alt={title}
                  src={imageUri}
                  className="w-[48px] object-cover h-[48px] shrink-0 bg-primary-400 border"
                />
                <h4 className="text-ellipsis h-10 overflow-hidden text-sm max-w-[48ch]">
                  Melodies by Shawn Somebody x Tommy Other Person
                </h4>
              </div>
            </CardBody>
            <CardFooter className="flex-wrap justify-between gap-x-4 gap-y-1">
              <div className="flex items-center gap-x-1">
                <p className="text-primary-400 font-semibold">
                  {icons["NGN"]?.symbol} 400
                </p>
                <Chip size="sm" variant="faded" color="warning">
                  Paid
                </Chip>
              </div>
              <Button
                size="sm"
                color="primary"
                radius="lg"
                className="justify-self-end"
              >
                Buy
              </Button>
              <div className="grow w-full flex items-center gap-x-2">
                <p>
                  <span className="text-slate-500 text-xs">By</span> Alleon
                </p>
                <VerifiedIcon size={16} className="text-success-400" />
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div> */
  };
}
