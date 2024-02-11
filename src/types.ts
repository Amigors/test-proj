export type User = {
  id: string;
  createDate: number;
  firstName: string;
  lastName: string;
  state: string;
  iban: string;
  bankName: string;
  sortCode: string;
  accountNumber: string;
  address: string;
  currency: string;
};

export type Transaction = {
  id: string;
  currency: string;
  amount: string;
  description: string;
  createdDate: number;
  state: string;
};

export type ErrorResponse = {
  status: string;
  reason: string;
};
