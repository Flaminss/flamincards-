import { UserId } from "./update-profile";

export type AccountInfo = {
  $id: string;
  names: {
    first: string;
    last: string;
    middle: string;
  };
  phone: {
    no: number;
    verified: boolean;
  };
  email: {
    address: string;
    verified: boolean;
  };
  dob: Date;
  gender: "M" | "F";
  referalCode: string;
};

export default async function action(search: { userId: UserId }) {
  return;
}
