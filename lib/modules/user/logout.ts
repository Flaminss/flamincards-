import { account } from "@lib/appwrite";

export default async function logout() {
  return account.deleteSession("current");
}
