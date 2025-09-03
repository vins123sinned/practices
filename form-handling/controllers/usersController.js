import { body, validationResult } from "express-validator";
import { usersStorage } from "../storages/usersStorage.js";

const alphaErr = "must only contain letters";
const lengthErr = "must be between 1 and 10 characters";
const notEmptyErr = "must not be empty";
const emailErr = "must be a valid email address (example@domain.com)";
const ageErr = "must be between 18 and 120"
const maxLengthErr = "must not be more than 200 characters long";

const validateUser = [
  body("firstName").trim()
    .notEmpty().withMessage(`First name ${notEmptyErr}`)
    .isAlpha().withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`First name ${lengthErr}`),
  body("lastName").trim()
    .notEmpty().withMessage(`Last name ${notEmptyErr}`)
    .isAlpha().withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`Last name ${lengthErr}`),
  body("email").trim()
    .notEmpty().withMessage(`Email address ${notEmptyErr}`)
    .isEmail().withMessage(`Email address ${emailErr}`),
  body("age").trim()
    .optional({ values: "falsy" })
    .isInt({ min: 18, max: 120 }).withMessage(`Age ${ageErr}`),
  body("bio").trim()
    .optional({ values: "falsy" })
    .isLength({ min: 1, max: 200 }).withMessage(`Bio ${maxLengthErr}`),
];

const usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

const usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

const usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.addUser({ firstName, lastName, email, age, bio });
    res.redirect("/");
  }
];

const usersUpdateGet = (req, res) => {
  const { userId } = req.params;

  const user = usersStorage.getUser(userId);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  })
}

const usersUpdatePost = [
  validateUser,
  (req, res) => {
    const { userId } = req.params;

    const user = usersStorage.getUser(userId);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(userId, { firstName, lastName, email, age, bio });
    res.redirect("/");
  }
];

const usersDeletePost = (req, res) => {
  const { userId } = req.params;

  usersStorage.deleteUser(userId);
  res.redirect("/");
}

const usersSearchGet = (req, res) => {
  const { query } = req.query;

  const searchResults = usersStorage.searchUsers(query);
  res.render("search", {
    title: "Search results",
    searchResults: searchResults,
  });
}

export { 
  usersListGet, 
  usersCreateGet, 
  usersCreatePost, 
  usersUpdateGet,
  usersUpdatePost,
  usersDeletePost,
  usersSearchGet,
};