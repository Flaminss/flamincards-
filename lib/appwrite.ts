import { Client, Account } from "appwrite";

const projectId = "669a882300077e41dbec";
const apiEndpoint = "https://cloud.appwrite.io/v1";

export const client = new Client()
  .setEndpoint(apiEndpoint)
  .setProject(projectId);

export const account = new Account(client);
export { ID } from "appwrite";
