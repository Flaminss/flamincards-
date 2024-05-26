import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import icons from "currency-icons";
import Link from "next/link";

const cardList = [
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

export default function GiftcardListing() {
  return (
    <div className="gap-4 grid grid-cols-2 lg:grid-cols-4 px-4 md:px-2">
      {cardList.map(({ id, title, imageUri, rate }, index) => (
        <Link key={index} href={`/market/giftcard/sell/${id}`}>
          <Card shadow="lg">
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="lg"
                radius="lg"
                width="100%"
                alt={title}
                className="w-full object-cover h-[140px]"
                src={imageUri}
              />
            </CardBody>
            <CardFooter className="flex-wrap gap-x-4 gap-y-1 justify-between">
              <h4 className="font-medium text-base">{title}</h4>
              <p className="text-success-500 text-sm">{`${
                icons[rate.from]?.symbol
              }${rate.value}/${icons[rate.to]?.symbol}`}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
