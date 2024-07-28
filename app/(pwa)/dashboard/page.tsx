"use client";

import clsx from "clsx";
import { useState, useMemo } from "react";
import {
  Input,
  Progress,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Select,
  SelectItem,
  Chip,
  Link,
  Image,
  CardFooter,
  Card,
  CardHeader,
  Divider,
  Spacer,
  CardBody,
} from "@nextui-org/react";
import {
  SearchIcon,
  ChevronDown,
  ListOrderedIcon,
  FilterXIcon,
  ArrowDownUp,
  ShieldCheck,
  EyeOff,
  TrendingUp,
  LineChart,
  Landmark,
  BadgeDollarSign,
  ArrowRightCircle,
  ArrowRight,
  XIcon,
  MessageCircleWarningIcon,
  Gift,
  WalletIcon,
  ShareIcon,
  Handshake,
  ArrowRightCircleIcon,
  CoinsIcon,
  CircleDollarSignIcon,
  AlertCircle,
  Link2Off,
  OutdentIcon,
  DownloadIcon,
  DollarSignIcon,
} from "lucide-react";
import FInancesLineChart from "./finances-line-chart";
import AnnoucementSection from "./annoucement-section";
import WalletSection from "./wallet-section";
import icons from "currency-icons";
import PrimaryBankCard from "./primary-bank-card";
import RecentTransactionsSection from "./recent-transactions-section";
import ServicesOfferedSection from "./services-offered-section";
import InvestmentPortfolioSection from "./investment-portfolio-section";
import NewsAndPromotionsSection from "./news-and-promotions-section";
import GiftCardEntisementSection from "./giftcard-entisement-section";
import PWAPageTitle from "../page-title";
import MiscellaneousSection from "./miscellaneous-section";

const sortOrders = [
  { key: "all", icon: "👀", title: "Browse All" },
  { key: "hot", icon: "🔥", title: "Hottest" },
  { key: "high", icon: "💰", title: "Highest Rate" },
  { key: "low", icon: "📉", title: "Lowest Rate" },
];

export default function DashboardPage() {
  const [selectedKeys, setSelectedKeys] = useState(
    new Set([sortOrders[0].title])
  );
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Dashboard" />
      </header>

      <AnnoucementSection />

      <div className="px-4 pt-2 pb-8 flex flex-col lg:flex-row overflow-hidden md:gap-x-6 lg:gap-x-8 gap-y-12">
        <WalletSection />
        <div className="flex flex-col lg:gap-x-12 justify-between grow gap-y-10 xl:gap-y-8">
          <PrimaryBankCard />
          <RecentTransactionsSection />
        </div>
      </div>

      <GiftCardEntisementSection />

      <MiscellaneousSection title="Airdrops & Crypto Currency">
        <div className="px-4 flex items-center gap-x-4">
          {[1, 2, 3].map((card) => {
            return (
              <Link href="/crypto" className="w-full block max-w-2xl">
                <Card shadow="lg">
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="lg"
                      radius="lg"
                      width="100%"
                      alt="noticoin"
                      className="w-full object-cover h-[164px] lg:h-[284px]"
                    />
                  </CardBody>
                  {/* <CardFooter className="flex-wrap gap-x-4 gap-y-1 sm:flex-nowrap justify-between">
                    <h4 className="font-medium text-base">{title}</h4>
                    <p className="text-success-500 text-sm">{`${
                      icons[rate.from]?.symbol
                    }${rate.value}/${icons[rate.to]?.symbol}`}</p>
                  </CardFooter> */}
                </Card>
              </Link>
            );
          })}
        </div>
      </MiscellaneousSection>

      <InvestmentPortfolioSection />

      <NewsAndPromotionsSection />
    </div>
  );
}
