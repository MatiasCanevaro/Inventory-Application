const { Pool } = require("pg");

/* module.exports = new Pool({
    connectionString: "postgresql://postgres:123456@localhost:5432/top_users"
}); */

module.exports = new Pool({
    connectionString: "postgresql://admin:i60kaskJkOa8VoCYITohT31q1MIonk3N@dpg-cto87b5umphs73ccs2l0-a/inventory_application_mv8d"
});