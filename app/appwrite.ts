import { Client, Account } from "appwrite";

export const client = new Client();
const projectId = "669a882300077e41dbec";
const apiEndpoint = "https://cloud.appwrite.io/v1";

client.setEndpoint(apiEndpoint).setProject(projectId);

export const account = new Account(client);
export { ID } from "appwrite";
