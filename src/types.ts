export interface IUserData {
    accountNumber: string;
    address: string;
    bankName: string;
    createdDate: number;
    currency: string;
    firstName: string;
    iban: string;
    id: string;
    lastName: string;
    sortCode: string;
    state: string;
}

export interface ITrans {
    accountNumber: string;
    amount: number;
    bankName: string;
    createdDate: number;
    currency: string;
    id: string;
    name: string;
    state: string;
}
