export { ID } from "appwrite";
import { Client, Account, Databases, Storage } from "appwrite";

const projectId = "669a882300077e41dbec";
const apiEndpoint = "https://cloud.appwrite.io/v1";

export const client = new Client()
  .setEndpoint(apiEndpoint)
  .setProject(projectId);

export const account = new Account(client);

export const mediaStorage = new Storage(client);

export const databases = new Databases(client);
export const DATABSE_ID = "rmldb";
export const collections = {
  USERS: {
    id: null,
    BANK_BILLING: {
      id: "67240c1e0000e0b98a46",
    },
  },
  EXCHANGE_RATES: {
    id: "67058e57003a5b47a69d",
  },
  GIFTCARDS: {
    id: "6702f585002e232c7bb9",
    REGION: {
      id: "67058aea003289efb0f3",
      VALUES: {
        id: "67058d040009cf264c23",
      },
    },
    TRADE: {
      id: "6723fc860013466a0eda",
      VALUE: {
        id: "6723fe0b0004be1dfdc1",
      },
    },
  },
  TRANSACTIONS: {
    id: "6702f5d60009ef1321e9",
  },
};
