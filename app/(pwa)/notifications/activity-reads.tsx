"use client";

import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Button,
} from "@nextui-org/react";
import { CircleArrowRightIcon, Share2Icon } from "lucide-react";

export default function ActivityReads() {
  return (
    <div className="grid gap-y-6 px-4">
      {[1, 2, 3, 4].map((count) => {
        return (
          <Card key={count} className="max-w-[64ch] lg:w-[64ch] shadow">
            <CardHeader>
              <Link href="/">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt=""
                  className="w-full object-cover h-[196px]"
                  src=""
                />
              </Link>
              <Button
                variant="flat"
                radius="full"
                size="md"
                isIconOnly
                className="absolute top-2 right-2 shadow-md"
              >
                <Share2Icon className="text-sm" size={18} />
              </Button>
            </CardHeader>
            <CardBody className="px-4">
              <header className="flex items-center gap-x-3 mb-3">
                <Chip
                  size="lg"
                  radius="sm"
                  className="text-xl"
                  classNames={{ base: "p-2 h-auto", content: "p-0" }}
                >
                  🎉
                </Chip>
                <h4 className="text-ellipsis overflow-hidden max-h-20 leading-snug text-xl max-w-[38ch]">
                  You are one step away from becoming a Millionaire 🤑
                </h4>
              </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                doloremque laudantium expedita, deleniti necessitatibus aliquid
                inventore blanditiis amet? Ipsa, ab.
              </p>
            </CardBody>
            <CardFooter className="justify-between items-center">
              <p className="text-primary-800 text-sm px-2">
                May 02, 2023 at 9:30pm
              </p>
              <Button size="md" variant="light">
                View Details <CircleArrowRightIcon size={16} />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
