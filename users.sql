DROP DATABASE IF EXISTS service_cart;

CREATE DATABASE service_cart;

-- Connects the to products database
\c service_cart;

-- Provides total time it took to execute query and fetch results back to client


CREATE TABLE IF NOT EXISTS Users (
  userid integer,
  name text,
  addresses text[],
  delivery_address text,
  cart integer[],
  shopping_list integer[],
  shopping_list_privacy boolean,
  wish_list integer[],
  wish_list_privacy boolean,
  idea_list integer[],
  idea_list_privacy boolean
);


CREATE TABLE IF NOT EXISTS Products (
  productid int,
  price money,
  quantity int
);


 COPY Users(userid, name, addresses, shopping_list_privacy, wish_list_privacy, idea_list_privacy) from '/Users/lukassinger/Desktop/service_cart_ls/database/helpers/postGre.csv' DELIMITER ',' CSV HEADER;

COPY Products(productid, price, quantity) from '/Users/lukassinger/Desktop/service_cart_ls/database/helpers/postGreProducts.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX IF NONE EXISTS idx_Users_userid ON Users(userid);

CREATE INDEX IF NONE EXISTS idx_Users_addresses ON Users USING GIN(addresses);

CREATE INDEX IF NONE EXISTS idx_product_id ON Products(productid);