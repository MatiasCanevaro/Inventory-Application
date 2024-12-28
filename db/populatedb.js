#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

CREATE TABLE IF NOT EXISTS item (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  category_id INTEGER REFERENCES category (id)
);


INSERT INTO category (name) VALUES 
('Electronics'),
('Clothing'),
('Books'),
('Furniture'),
('Toys');


INSERT INTO item (name, category_id) VALUES 
-- Items for Electronics (category_id = 1)
('Laptop', 1),
('Smartphone', 1),
('Tablet', 1),
('Smartwatch', 1),
('Headphones', 1),

-- Items for Clothing (category_id = 2)
('T-Shirt', 2),
('Jeans', 2),
('Jacket', 2),
('Shoes', 2),
('Socks', 2),

-- Items for Books (category_id = 3)
('Novel', 3),
('Science Book', 3),
('History Book', 3),
('Art Book', 3),
('Cookbook', 3),

-- Items for Furniture (category_id = 4)
('Chair', 4),
('Table', 4),
('Couch', 4),
('Desk', 4),
('Bookshelf', 4),

-- Items for Toys (category_id = 5)
('Action Figure', 5),
('Doll', 5),
('Puzzle', 5),
('Board Game', 5),
('RC Car', 5);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://admin:i60kaskJkOa8VoCYITohT31q1MIonk3N@dpg-cto87b5umphs73ccs2l0-a/inventory_application_mv8d"
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
