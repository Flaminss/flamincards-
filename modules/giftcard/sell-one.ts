import {
  DATABSE_ID,
  ID,
  collections,
  databases,
  mediaStorage,
} from "@lib/appwrite";
import { UserId } from "@modules/user/update-profile";

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
  cover: File;
  title: string;
  region: {
    name: string;
    abbr: string;
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

  const transactionInDb = await databases.createDocument(
    DATABSE_ID,
    collections.TRANSACTIONS.id,
    ID.unique(),
    {
      UserId: search.userId,
      type: TRANSACTION_TYPE,
      amount: calcTotalAmount(form.values),
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
    transactionId: transactionInDb.$id,
  };
}
