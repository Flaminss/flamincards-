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

export default function InboxReads() {
  return (
    <div className="grid gap-y-6 px-4">
      {[1, 2, 3, 4].map((count) => {
        return (
          <Card key={count} className="max-w-[64ch] lg:w-[64ch] shadow">
            <CardHeader className="items-center gap-x-3 px-4 pb-2 pt-4">
              📢
              <h4 className="text-ellipsis overflow-hidden max-h-20 leading-snug lg:text-lg font-medium max-w-[38ch]">
                Congratulations!
                {/* Winner! You did very well! */}
              </h4>
            </CardHeader>
            <CardBody className="px-4 text-sm sm:text-base leading-relaxed text-zinc-200">
              <p>
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
