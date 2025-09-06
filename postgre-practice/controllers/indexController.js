import { getAllUsernames, insertUsername } from "../db/queries.js";

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

export { indexUsersGet, indexCreateGet, indexCreatePost };