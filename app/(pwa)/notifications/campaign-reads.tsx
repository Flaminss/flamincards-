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
import ReadFooter from "./read-footer";

export default function CampaignReads() {
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {[1, 2, 3, 4].map((count) => {
        return (
          <Card key={count} className="max-w-[64ch] lg:max-w-[64ch] shadow">
            <CardHeader>
              <Link href="/">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt=""
                  className="w-full object-cover h-[140px] lg:h-[196px]"
                  src=""
                />
              </Link>
              <Button
                variant="flat"
                radius="full"
                size="md"
                isIconOnly
                className="absolute top-2 right-2 shadow"
              >
                <Share2Icon className="size-5" />
              </Button>
            </CardHeader>
            <CardBody className="px-4">
              <header className="flex items-center gap-x-3 mb-3">
                🤑
                <h4 className="text-ellipsis overflow-hidden max-h-20 leading-snug font-medium lg:text-lg max-w-[46ch]">
                  You are one step away from becoming a Millionaire
                </h4>
              </header>
              <p className="text-sm text-zinc-100 lg:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                doloremque laudantium expedita, deleniti necessitatibus aliquid
                inventore blanditiis amet? Ipsa, ab.
              </p>
            </CardBody>
            <ReadFooter />
          </Card>
        );
      })}
    </div>
  );
}
