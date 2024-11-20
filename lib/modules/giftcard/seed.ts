import { collections, databases, DATABSE_ID, ID } from "@lib/appwrite";

type GiftcardRegionRate = {
  value: number;
  minAmount: number;
  maxAmount: number;
  region: string; // ID
  toCurrencyISO: string; // 3 CHARS,
};

type GiftcardRegion = {
  giftcard: string; // ID
  currencyISO: string; // 3 CHARS
  countryISO: string; // 3 CHARS
  rates: string[]; // GiftcardRegionRate._id[]
};

type GiftcardTags =
  | "TRENDING"
  | "COMMON"
  | "HIGH_RATES"
  | "DYING"
  | "LOW_RATES";

type Giftcard = {
  title: string;
  logoUri: string;
  tags: GiftcardTags[];
  regions: string; // GiftcardRegion._id[];
};

function getCountryNameFromISO(code: string) {
  const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
  // returns country name in English
  return regionNames.of(code.toUpperCase()); 
}

const generateID = (title: string) => {
  return title.toLowerCase().replace(/\s/g, "-") + "-" + Date.now();
};

const getRandomValueFromArray = (
  arr: any[],
  { minValue }: { minValue: number } = { minValue: 0 }
) => {
  const possibleValues = arr.filter((i) => i > minValue);
  return possibleValues[Math.floor(Math.random() * possibleValues.length)];
};

const generateFakeValue = ({
  id,
  regionId,
}: {
  id: string;
  regionId: string;
}) => {
  // derive the "from" property from the origin (location)
  const _id = id || ID.unique();
  const minAmount = getRandomValueFromArray([5, 50, 10, 100, 500]);

  return {
    _id,
    minAmount,
    maxAmount: getRandomValueFromArray([100, 1000, 5000, 1000000], {
      minValue: minAmount,
    }),
    rate: Math.floor(Math.random() * (1200 - 5000 + 1)),
    fromCurrencyIso: regionId,
    toCurrencyIso: "NGN",
  };
};

const _region_ = ["US", "EU", "CA", "AU"];

const generateFakeRegion = ({ cardId }: { cardId: string }) => {
  const countryISO = "USA";
  const currencyISO = "USD";
  return {
    _id: `${cardId}-${countryISO}-${currencyISO}`,
    title: "Some country title",
  };
};

const cardList = [
  {
    title: "Steam",
    tags: ["TRENDING", "COMMON"],
    regions: [
      {
        currencyISO: "US",
        countryISO: "USD",
        rates: [
          {
            value: 1200,
            minAmount: 5,
            maxAmount: 20,
            toCurrencyISO: "NGN",
          },
        ],
      },
    ],
  },
  {
    title: "Google Play",
    tags: [],
  },
  {
    title: "Amazon",
    tags: [],
  },
  {
    title: "iTunes",
    tags: [],
  },
  {
    title: "Apple",
    tags: [],
  },
  {
    title: "Ebay",
    tags: [],
  },
  {
    title: "American Express",
    tags: [],
  },
  {
    title: "Razer Gold",
    tags: ["HIGH_RATES", "TRENDING"],
  },
  {
    title: "Visa",
    tags: [],
  },
  {
    title: "Xbox",
    tags: [],
  },
  {
    title: "Best Buy",
    tags: [],
  },
  {
    title: "Addidas",
    tags: [],
  },
  {
    title: "Playstation",
    tags: [],
  },
  {
    title: "Roblox",
    tags: [],
  },
  {
    title: "Walmart",
    tags: [],
  },
  {
    title: "Nike",
    tags: [],
  },
  {
    title: "Sephora",
    tags: [],
  },
  {
    title: "Footlocker",
    tags: [],
  },
];

export default async function action() {
  cardList.forEach(async ({ title, tags }) => {
    await databases.createDocument(
      DATABSE_ID,
      collections.GIFTCARDS.id,
      generateID(title),
      {
        title,
        tags,
        logoUri: "",
        regions: [],
      }
    );
  });
}
