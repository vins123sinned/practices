import express from 'express';
import path from 'node:path';

const app = express();

const links = [
  { href: "/",  text: "Home" },
  { href: "/about", text: "About" },
];
const users = ["Me", "Myself", "I"];

// configure static files path
const assetPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetPath));

// enable and configure EJS as a view engine and its path
app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening on port${PORT}!`)
})