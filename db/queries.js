const pool = require("./pool");

async function getAll(table) {
  const query = `SELECT * FROM ${table}`;
  const { rows } = await pool.query(query);
  return rows;
}

async function getById(table, value) {
  const query = `SELECT * FROM ${table} WHERE id = ${value}`;
  const { rows } = await pool.query(query);
  return rows[0];
}

async function getAllByValue(table, column, value) {
  const query = `SELECT * FROM ${table} WHERE ${column} = ${value}`;
  const { rows } = await pool.query(query);
  return rows;
}

async function insert(table, column, value) {
  const query = `INSERT INTO ${table} (${column}) VALUES ($1)`;
  await pool.query(query, [value]);
}

module.exports = {
  getAll,
  getById,
  getAllByValue,
  insert
};
