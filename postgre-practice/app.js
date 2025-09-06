import express from "express";
import { indexRouter } from "./routers/indexRouter.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  
  console.log(`Listening at port ${PORT}!`)
})
