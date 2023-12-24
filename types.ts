export type Client = {
    id: string;
    name: string;
    email: string;
    cards: Card[];
    travels: Travel[];
};
  
export type Driver = {
    id: string;
    name: string;
    email: string;
    username: string;
    travels: Travel[];
};

export type Travel = {
    id: string;
    client: string;
    driver: string;
    money: number;
    distance: number;
    date: string;
    status: Status;
};

export enum Status {
    Active = "Active",
    Inactive = "Inactive",
};

export type Card = {
    number: number;
    cvv: number;
    expirity: string;
    money: number;
}