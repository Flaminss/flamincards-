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

export default function InboxReads() {
  return (
    <div className="grid gap-y-6 px-4">
      {[1, 2, 3, 4].map((count) => {
        return (
          <Card key={count} className="max-w-[64ch] lg:w-[64ch] shadow">
            <CardHeader className="items-center gap-x-3 px-4">
              <Chip
                size="lg"
                radius="sm"
                className="text-xl"
                classNames={{ base: "p-2 h-auto", content: "p-0" }}
              >
                📢
              </Chip>
              <h4 className="text-ellipsis overflow-hidden max-h-20 leading-snug text-xl max-w-[38ch]">
                Congratulations!
                {/* Winner! You are doing great! */}
              </h4>
            </CardHeader>
            <CardBody className="px-4">
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
