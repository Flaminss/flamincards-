import { UserId } from "./update-profile";

type PaymentInfoDetails =
  | {
      bank: {
        name: string;
        code: string;
        account: string;
        owner: string;
      };
      crypto: undefined;
      exchange: undefined;
    }
  | {
      crypto: {
        address: string;
        network: string;
      };
      bank: undefined;
      exchange: undefined;
    }
  | {
      exchange: {
        name: string;
        uuid: string;
      };
      bank: undefined;
      crypto: undefined;
    };

export default async function action(
  search: { userId: UserId },
  details: PaymentInfoDetails
) {
  // Only adds Bank payment info that matches with fullname
  // You can only use a payment info that matches with fullname
  // // You can add multiple payment info only if they all match the same name

  return;
}
