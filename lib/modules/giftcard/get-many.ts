type GiftcardTitle = string;

type GiftcardTag = "POPULAR" | "WHATEVER";

type Giftcard = {
  $id: string;
  logoUri: string;
  title: GiftcardTitle;
  tags: GiftcardTag[];
};

type Filter = {
  search: GiftcardTitle;
  tags: GiftcardTag[];
  order: {
    by: string;
    direction: "BIG_TO_SMALL" | "SMALL_TO_BIG";
  };
};

export default async function action(filter: Filter) {
  return [] as Giftcard[];
}
