import express from "express";
import { addNewBook, getAllbook } from "../controlers/book_controller";
import validate from "../middleware/validate";
import { addBooksSchema } from "../zodSchema/zod_Schema";

const bookRouter = express.Router();

bookRouter.get(`/`, getAllbook);
bookRouter.post(`/`, validate(addBooksSchema), addNewBook);

export default bookRouter;
