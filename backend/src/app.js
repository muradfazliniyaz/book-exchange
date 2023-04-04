// import express
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { router as usersRouter } from './user.routes.js';
import { router as booksRouter } from './book.routes.js';

// create an express app
const app = express();

// the app allows every origin to request
// cross orgine policy 
app.use(cors());
app.use(bodyParser.json());

app.use('/', usersRouter);
app.use('/', booksRouter);

export default app;