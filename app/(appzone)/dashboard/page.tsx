"use client";

import clsx from "clsx";
import { useState, useMemo, useEffect } from "react";
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
import OnboardingSection from "./onboarding-section";
// import createManyGiftcards from "@modules/giftcard/seed";

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

  // useEffect(() => {
  //   createManyGiftcards();
  // }, []);

  return (
    <div className="pb-20 max-w-xl lg:max-w-[unset] mx-auto">
      <header className="py-5 md:pt-0 lg:pt-1 px-4 mb-2">
        <PWAPageTitle title="Dashboard" />
      </header>

      <AnnoucementSection />
      {/* <OnboardingSection /> */}

      <div className="px-4 pt-2 pb-8 flex flex-col lg:flex-row overflow-hidden md:gap-x-6 lg:gap-x-8 gap-y-12">
        <WalletSection />
        <div className="flex flex-col lg:gap-x-12 justify-between grow gap-y-10 xl:gap-y-8">
          <PrimaryBankCard classnames="my-auto hidden lg:block" />
          <RecentTransactionsSection />
        </div>
      </div>

      <GiftCardEntisementSection />

      {/* <MiscellaneousSection title="Web3 - Airdrops">
        <div className="px-4 flex items-center gap-x-4">
          {[1, 2, 3].map((card, index) => {
            return (
              <Link
                key={`${card}#${index}`}
                href="/crypto"
                className={clsx("hidden lg:block w-full max-w-2xl", {
                  block: index === 1,
                })}
              >
                <Card shadow="lg">
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="lg"
                      radius="lg"
                      width="100%"
                      alt="noticoin"
                      className="w-full object-cover h-[196px] lg:h-[284px]"
                    />
                  </CardBody>
                </Card>
              </Link>
            );
          })}
        </div>
      </MiscellaneousSection> */}

      {/* <InvestmentPortfolioSection /> */}

      <NewsAndPromotionsSection />
    </div>
  );
}
