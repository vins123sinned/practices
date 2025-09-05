const indexUsersGet = (req, res) => {
  res.send("Usernames here")
};

const indexCreateGet = (req, res) => {
  res.render("addUsername", {
    title: "Add Username"
  });
};

const indexCreatePost = (req, res) => {
  res.send("Creating and adding username...");
}

export { indexUsersGet, indexCreateGet, indexCreatePost };