const { Pool } = require("pg");

/* module.exports = new Pool({
    connectionString: "postgresql://postgres:123456@localhost:5432/top_users"
}); */

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL
});