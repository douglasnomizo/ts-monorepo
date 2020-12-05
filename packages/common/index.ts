export enum Currency {
  USD,
  ZAR,
  EUR,
  GHS,
  NGN,
  UGX,
  KES,
  BTC
}

export interface Exchange {
  origin: Currency,
  destination: Currency,
  amount: number,
  rate: number
}

export enum Queues {
  TRADE = 'TRADE'
}