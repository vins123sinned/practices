import express from "express";
import { indexRouter } from "./routers/indexRouter.js";

const app = express();

app.set("view engine", "express");
app.set("views", "views");

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  
  console.log(`Listening at port ${PORT}!`)
})
