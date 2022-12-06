-- Strong entities
CREATE TABLE IF NOT EXISTS "products" (
    "id" bigserial, 
    "pid" varchar PRIMARY KEY,
    "name" varchar NOT NULL,
    "description" varchar NOT NULL,
    "unitName" varchar NOT NULL,
    "priceSol" float NOT NULL,
    "priceUsd" float NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT (now())
);

