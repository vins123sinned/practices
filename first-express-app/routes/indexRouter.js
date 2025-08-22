import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send('Index page'));

export { indexRouter };