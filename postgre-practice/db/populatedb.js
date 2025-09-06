import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR (255)
);

INSERT INTO usernames (username)
VALUES
  ('Chungus'),
  ('Mungus'),
  ('Bungus');
`;

const main = async () => {
  console.log("Seeding...");
  const client = new Client({
    connectionString: "postgresql://vinsonhe:@localhost:5432/top_users",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done.");
}

main();