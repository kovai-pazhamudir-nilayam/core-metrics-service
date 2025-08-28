export enum PriceType {
  PRICE_EXCL_TAX = 'PRICE_EXCL_TAX',
  PRICE_INCL_TAX = 'PRICE_INCL_TAX',
  MRP = 'MRP',
  EVENT = 'EVENT',
}

interface PriceObject {
  cent_amount: number;
  currency: CurrencyType;
  fraction: number;
}

export enum CurrencyType {
  INR = 'INR',
}

export interface Price {
  type: PriceType;
  price: PriceObject;
}

export interface UOMPrice extends PriceObject {
  unit: string;
}

export interface ListPrice extends Price, PriceObject {}
