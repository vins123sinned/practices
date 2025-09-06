import { pool } from "./pool.js";

const getAllUsernames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

const insertUsername = async (username) => {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

export { getAllUsernames, insertUsername };