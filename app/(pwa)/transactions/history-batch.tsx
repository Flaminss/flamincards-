import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  ChipProps,
  getKeyValue,
  Link,
  Button,
} from "@nextui-org/react";
import { HandshakeIcon, Plus } from "lucide-react";
import icons from "currency-icons";
import clsx from "clsx";

const columns = [
  { name: "", uid: "visuals" },
  { name: "Mobile Brief", uid: "mobile-brief" },
  { name: "Mobile Figures", uid: "mobile-figures" },
  { name: "", uid: "name" },
  { name: "Amount", uid: "amount" },
  { name: "Flow", uid: "flow" },
  { name: "Status", uid: "status" },
  { name: "Action", uid: "actions" },
];

const history = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
  success: "success",
  rejected: "danger",
  processing: "warning",
  cancelled: "danger",
  refunded: "warning",
  failed: "danger",
};

type User = (typeof history)[0];

export default function HistoryBatch() {
  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "visuals":
        return (
          <div className="flex items-center justify-center rounded-md p-3 lg:p-4 bg-success-50 text-success w-fit">
            <HandshakeIcon className="size-6" />
          </div>
        );
      case "mobile-brief":
        return (
          <Link href="/transactions/some-id" className="grid text-zinc">
            <p className="text-medium font-meidum mb-1">Investment</p>
            <p className="text-xs text-zinc-400">May 20th at 9:00pm</p>
          </Link>
        );
      case "mobile-figures":
        return (
          <Link
            href="/transactions/some-id"
            className="grid gap-y-1 justify-items-end text-zinc"
          >
            <p className="text-medium lg:text-base whitespace-nowrap flex items-center gap-x-2">
              <Plus className="size-3" />
              {icons["NGN"]?.symbol || "₿"} 5,000
            </p>
            <p className="text-xs text-success">Successful</p>
          </Link>
        );
      case "name":
        return (
          <div>
            <p className="text-sm lg:text-medium mb-1">Withdrawl</p>
            <p className="text-xs text-zinc-400">May 20th at 9:00pm</p>
          </div>
        );
      case "amount":
        return <p className="lg:text-medium">50,000</p>;
      case "flow":
        return <span className="text-center uppercase font-mono">In</span>;
      case "status":
        return (
          <Chip
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
            radius="sm"
            className="capitalize font-medium px-2 leading-loose"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <Button as={Link} href="/transactions/some-id" size="sm" radius="lg">
            View Details
          </Button>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      aria-label="Example table with custom cells"
      classNames={{ wrapper: "p-0 bg-transparent border-none" }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={
              ["status", "flow", "actions", "amount"].includes(column.uid)
                ? "center"
                : "start"
            }
            className={clsx(
              "bg-content1 text-sm py-2 !rounded-b-none hidden",
              "lg:table-cell",
              {
                "lg:hidden": ["mobile-brief", "mobile-figures"].includes(
                  column.uid
                ),
                "hidden lg:table-cell": ![
                  "visuals",
                  "mobile-brief",
                  "mobile-figures",
                ].includes(column.uid as any),
              }
            )}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={history}>
        {(record) => (
          <TableRow key={record.id} className="h-[5rem]">
            {(columnKey) => (
              <TableCell
                className={clsx({
                  "lg:hidden": ["mobile-brief", "mobile-figures"].includes(
                    columnKey as any
                  ),
                  "hidden lg:table-cell": ![
                    "visuals",
                    "mobile-brief",
                    "mobile-figures",
                  ].includes(columnKey as any),
                  "w-[3ch] p-0": columnKey === "visuals",
                })}
              >
                {renderCell(record, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
