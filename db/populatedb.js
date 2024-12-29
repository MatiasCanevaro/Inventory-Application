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

-- Insert only if no data exists
DO $$
BEGIN
  -- Check if there are already categories
  IF NOT EXISTS (SELECT 1 FROM category LIMIT 1) THEN
    INSERT INTO category (name) VALUES 
    ('Electronics'),
    ('Clothing'),
    ('Books'),
    ('Furniture'),
    ('Toys');
  END IF;
  
  -- Check if there are already items
  IF NOT EXISTS (SELECT 1 FROM item LIMIT 1) THEN
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
  END IF;
END $$;
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done!");
}

module.exports = { main };