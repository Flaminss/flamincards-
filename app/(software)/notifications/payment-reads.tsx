"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Button,
} from "@nextui-org/react";
import { CircleArrowRightIcon } from "lucide-react";

export default function PaymentReads() {
  return (
    <div className="grid gap-y-6 px-4">
      {[1, 2, 3, 4].map((count) => {
        return (
          <Card className="w-full max-w-[64ch] lg:w-[64ch] shadow">
            <CardHeader className="justify-between items-start">
              <div className="flex gap-x-2">
                🎁
                <h4 className="font-semibold text-lg">Gift Card</h4>
              </div>
              <Chip
                color="success"
                variant="flat"
                size="sm"
                className="font-medium"
              >
                Success
              </Chip>
            </CardHeader>
            <CardBody className="justify-center items-center py-4 gap-y-4">
              <p className="text-lg">Steam ($2000) x{count}</p>
              <p className="text-center text-sm">
                <span className="text-success-400">You Recieved:</span>{" "}
                <span className="block text-4xl font-medium">N10,000</span>
              </p>
            </CardBody>
            <CardFooter className="justify-between items-center">
              <p className="text-primary-900 text-sm px-2">
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
