import { Router } from "express";
import { indexCreateGet, indexCreatePost, indexUsersGet } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", indexUsersGet);
indexRouter.get("/new", indexCreateGet);
indexRouter.post("/new", indexCreatePost)

export { indexRouter };