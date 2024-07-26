"use client";

import clsx from "clsx";
import Image from "next/image";
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
  CardFooter,
  Image as ImageNext,
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
import Wallet from "./wallet-section";
import icons from "currency-icons";
import PrimaryBankCard from "./primary-bank-card";
import RecentTransactionsSection from "./recent-transactions-section";
import ServicesOfferedSection from "./services-offered-section";
import InvestmentPortfolioSection from "./investment-portfolio-section";
import NewsAndPromotionsSection from "./news-and-promotions-section";
import GiftCardEntisementSection from "./giftcard-entisement-section";

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
    <div className="pb-20">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <h1 className="text-2xl lg:text-3xl">Dashboard</h1>
      </header>

      <AnnoucementSection />

      <div className="px-4 py-6 flex flex-col lg:flex-row overflow-hidden md:gap-x-6 lg:gap-x-8 gap-y-12">
        <Wallet />
        <div className="flex flex-col lg:gap-x-12 justify-between grow gap-y-10 xl:gap-y-8">
          <PrimaryBankCard />
          <RecentTransactionsSection />
        </div>
      </div>

      <GiftCardEntisementSection />
      <ServicesOfferedSection />
      <InvestmentPortfolioSection />
      <NewsAndPromotionsSection />
    </div>
  );
}
