// import express
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "./common/sequelize.js";

import { router as usersRouter } from "./controller/user.routes.js";
import { router as booksRouter } from "./controller/book.routes.js";

// create an express app
const app = express();

const port = 9000;

// the app allows every origin to request
// cross orgine policy
app.use(cors());
app.use(bodyParser.json());

app.use("/", usersRouter);
app.use("/", booksRouter);

app.listen(port, () => {
  console.log(`Book ReST API is listening on port ${port}`);
});
