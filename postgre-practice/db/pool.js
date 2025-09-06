import { Pool } from "pg";

// NOTE: in real project use environment variables!
// This example is just for simplicity!
export const pool = new Pool({
  host: "localhost", // where the db is hosted
  user: "vinsonhe",
  database: "top_users",
  password: "",
  port: 5432,
});