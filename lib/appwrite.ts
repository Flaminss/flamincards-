import { Client, Account, Databases } from "appwrite";

const projectId = "669a882300077e41dbec";
const apiEndpoint = "https://cloud.appwrite.io/v1";

export const client = new Client()
  .setEndpoint(apiEndpoint)
  .setProject(projectId);

export { ID } from "appwrite";

export const account = new Account(client);
export const database = new Databases(client);
export const DATABSE_ID = "616f3b3b7f5b4";

export const collections = {
  USERS: {
    id: "616f3b3b7f5b5",
    BANK_BILLING: {
      id: "616f3b3b7f5b5",
    },
  },
  EXCHANGE_RATES: {
    id: "616f3b3b7f5b5",
  },
  GIFTCARDS: {
    id: "616f3b3b7f5b5",
    REGION: {
      id: "616f3b3b7f5b5",
      VALUES: {
        id: "616f3b3b7f5b5",
      },
    },
    TRADE: {
      id: "616f3b3b7f5b5",
      VALUE: {
        id: "616f3b3b7f5b5",
      },
    },
  },
  TRANSACTIONS: {
    id: "616f3b3b7f5b5",
  },
};
