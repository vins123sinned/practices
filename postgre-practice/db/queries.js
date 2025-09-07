import { pool } from "./pool.js";

const getAllUsernames = async () => {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
};

const insertUsername = async (username) => {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
};

const searchUsername = async (username) => {
  const { rows } = await pool.query("SELECT * FROM usernames WHERE username LIKE $1", [`%${username}%`]); 
  return rows;
}

const deleteAllUsernames = async () => {
  await pool.query("TRUNCATE TABLE usernames RESTART IDENTITY");
}

export { getAllUsernames, insertUsername, searchUsername, deleteAllUsernames };