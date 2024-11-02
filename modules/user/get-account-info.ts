export type AccountInfo = {
  // primary bank-billing info full-name
  $id: string;
  fullName: string;
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

export default async function action() {}
