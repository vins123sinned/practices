import { Router } from "express";
import { indexCreateGet, indexCreatePost, indexDeleteGet, indexSearchGet, indexUsersGet } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", indexUsersGet);
indexRouter.get("/new", indexCreateGet);
indexRouter.post("/new", indexCreatePost);
indexRouter.get("/search", indexSearchGet);
indexRouter.get("/delete", indexDeleteGet);

export { indexRouter };