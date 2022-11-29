import express from "express";
import {
  addNewLoan,
  getAllLoan,
  lendBooks,
} from "../controlers/loan_controller";
import validate from "../middleware/validate";
import { addLoanSchema } from "../zodSchema/zod_Schema";

const loanRouter = express.Router();

loanRouter.get(`/`, getAllLoan);
loanRouter.get(`/user/loan/:userid`, lendBooks);
loanRouter.post(`/`, validate(addLoanSchema), addNewLoan);

export default loanRouter;
