import express from "express";
import { connectDB } from "./config/DB";
import bookRouter from "./routes/book_Routre";
import loanRouter from "./routes/loan_Router";
import userRouter from "./routes/user_Router";

const app = express();

connectDB();
app.use(express.json());

app.use(`/user`, userRouter);
app.use(`/book`, bookRouter);
app.use(`/loan`, loanRouter);

const PORT = process.env.port || 5001;
app.listen(PORT, () => {
  console.log("server run on port : " + PORT);
});
