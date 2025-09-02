import { Router } from "express";
import { usersListGet, usersCreateGet, usersCreatePost, usersUpdateGet, usersUpdatePost, usersDeletePost } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get("/", usersListGet);
usersRouter.get("/create", usersCreateGet);
usersRouter.post("/create", usersCreatePost);
usersRouter.get("/:userId/update", usersUpdateGet);
usersRouter.post("/:userId/update", usersUpdatePost);
usersRouter.post("/:userId/delete", usersDeletePost);

export { usersRouter };