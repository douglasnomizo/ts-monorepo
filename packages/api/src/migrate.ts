import db from './db'

const createTrades = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS trades;
  CREATE TABLE trades (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),  
    "origin" text NOT NULL, 
    "destination" text NOT NULL, 
    "amount" double precision NOT NULL, 
    "rate" double precision NOT NULL,
    "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
  );
`

const fixtures = `
  INSERT INTO trades (origin, destination, amount, rate) VALUES ('EUR', 'USD', 200, 0.8);
  INSERT INTO trades (origin, destination, amount, rate) VALUES ('USD', 'ZAR', 10, 100);
  INSERT INTO trades (origin, destination, amount, rate) VALUES ('USD', 'BTC', 500, 0.012);
`

const run = async () => {
  await db.query(createTrades)
  await db.query(fixtures)
}

run()