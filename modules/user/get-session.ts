import { account } from "@/lib/appwrite";
import { AuthSession } from "./login";

export default async function action() {
  return account.get() as unknown as Promise<AuthSession>;
}
