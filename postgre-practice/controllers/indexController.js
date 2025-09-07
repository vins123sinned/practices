import { deleteAllUsernames, getAllUsernames, insertUsername, searchUsername } from "../db/queries.js";

const indexUsersGet = async (req, res) => {
  const usernames = await getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", {
    title: "All usernames",
    usernames,
  });
};

const indexCreateGet = (req, res) => {
  res.render("addUsername", {
    title: "Add Username"
  });
};

const indexCreatePost = async (req, res) => {
  const { username } = req.body;
  await insertUsername(username);
  res.redirect("/");
}

const indexSearchGet = async (req, res) => {
  const { query } = req.query;
  const usernames = await searchUsername(query);
  res.render("search", {
    title: "Search results",
    usernames,
  });
};

const indexDeleteGet = async (req, res) => {
  await deleteAllUsernames();
  
  const usernames = await getAllUsernames()
  res.render("index", {
    title: "All usernames",
    usernames,
  });
};

export { indexUsersGet, indexCreateGet, indexCreatePost, indexSearchGet, indexDeleteGet };