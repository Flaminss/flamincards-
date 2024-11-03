import { create } from "zustand";

type Store = {
  regions: Array<any>;

  title: string;
  quantity: number;
  region: {
    name: string;
    abbr: string;
  };
  singleValue: {
    amount: number;
    ecode: string;
    physical: Array<string>;
  };
  multipleValues: Array<{
    amount: number;
    ecode: string;
    physical: Array<string>;
  }>;
  bank: {
    name: string;
    code: string;
    owner: string;
    number: string;
    confirmed: boolean;
  };
  terms: {
    agreed: boolean;
  };
  selectItem: (item: any) => void;
  getRegions: () => void;
  setValue: () => void;
  addValue: () => void;
  removeValue: () => void;
  sell: () => void;
};

// export const userProfileSlice = create<Store>()((set) => ({}));
