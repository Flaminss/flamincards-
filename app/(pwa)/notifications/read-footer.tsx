import { Button, CardFooter } from "@nextui-org/react";
import { CircleArrowRightIcon } from "lucide-react";

export default function ReadFooter() {
  return (
    <CardFooter className="justify-between items-center">
      <p className="text-zinc-400 text-sm px-2">May 2nd, 2023 at 9:30pm</p>
      <Button size="md" variant="light">
        View Details <CircleArrowRightIcon size={16} />
      </Button>
    </CardFooter>
  );
}
