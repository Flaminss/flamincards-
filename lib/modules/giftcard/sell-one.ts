import {
  DATABSE_ID,
  ID,
  collections,
  databases,
  mediaStorage,
} from "@lib/appwrite";
import { UserId } from "@lib/modules/user/update-profile";
import { Query } from "appwrite";

const TRANSACTION_TYPE = "GIFTCARD";
const BUCKET_ID = "hello";

type Value = {
  amount: number;
  ecode?: string;
  image?: Array<string>;
};

type BankDetails = {
  name: string;
  code: string;
  owner: string;
  account: string;
};

export type SaleForm = {
  $id: string;
  cover: File;
  title: string;
  region: {
    $id: string;
    name: string;
    abbr: string;
    currency?: string;
  };
  values: Array<Value>;
  bank: BankDetails;
  comment: string;
};

const structureAsFormObject = (form: SaleForm) => {
  const formDataObject = new FormData();
  formDataObject.append("card[title]", form.title);
  formDataObject.append("card[region][name]", form.region.name);
  formDataObject.append("card[region][abbr]", form.region.abbr);
  form.values.forEach((entry, entryIndex) => {
    formDataObject.append(
      `card[value][${entryIndex}][amount]`,
      entry.amount.toString()
    );
    formDataObject.append(
      `card[value][${entryIndex}][ecode]`,
      entry?.ecode || ""
    );
    entry?.image?.forEach((file, fileIndex) => {
      formDataObject.append(
        `card[value][${entryIndex}][image][${fileIndex}]`,
        file
      );
    });
  });

  return formDataObject;
};

const calcTotalAmount = (values: SaleForm["values"]) => {
  return values.reduce((acc, value) => acc + value.amount, 0);
};

export default async function action(
  search: { userId: UserId },
  form: SaleForm
) {
  // const cover = await mediaStorage.createFile(
  //   BUCKET_ID,
  //   ID.unique(),
  //   form.cover
  // );

  const totalValueAmount = calcTotalAmount(form.values);

  const regionValue = await databases.listDocuments(
    DATABSE_ID,
    collections.GIFTCARDS.REGION.VALUES.id,
    [
      Query.equal("region", [form.region.abbr]),
      Query.and([
        Query.lessThan("minAmount", totalValueAmount),
        Query.greaterThan("maxAmount", totalValueAmount),
      ]),
    ]
  );

  let exchangeRate = -1;
  if (regionValue.total > 0) {
    exchangeRate = (regionValue as any)[0].rate;
  }

  const transactionInDb = await databases.createDocument(
    DATABSE_ID,
    collections.TRANSACTIONS.id,
    ID.unique(),
    {
      UserId: search.userId,
      type: TRANSACTION_TYPE,
      amount: totalValueAmount * exchangeRate,
      status: "PENDING",
      flow: "IN",
      medium: "BANK",
      currency: "NGN",
      toName: form.bank.owner,
      toDetails: `${form.bank.name} (${form.bank.account})`,
      fromName: "RML_PAY",
      fromDetails: "Nigerian Bank",
    }
  );

  const valuesInDb = await Promise.all(
    form.values.map((value) => {
      return databases.createDocument(
        DATABSE_ID,
        collections.GIFTCARDS.TRADE.VALUE.id,
        ID.unique(),
        value
      );
    })
  );

  await databases.createDocument(
    DATABSE_ID,
    collections.GIFTCARDS.TRADE.id,
    ID.unique(),
    {
      cover: "this-sould-be-the-cover-id",
      title: form.title,
      region: form.region.abbr,
      values: valuesInDb.map((value) => value.$id),
      transaction: transactionInDb.$id,
      comment: form.comment,
    }
  );

  return {
    transactionId: transactionInDb.$id.toString(),
  };
}
