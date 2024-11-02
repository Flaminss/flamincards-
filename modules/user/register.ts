import { account, ID } from "@lib/appwrite";

export type RegistrationForm = {
  email: string;
  password: string;
};

export default async function action({ email, password }: RegistrationForm) {
  await account.create(ID.unique(), email, password);
}
