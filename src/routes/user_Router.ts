import express from "express";
import { getuser, postNewUser } from "../controlers/user_controller";
import validate from "../middleware/validate";
import { addUserSchema } from "../zodSchema/zod_Schema";

const userRouter = express.Router();

userRouter.get(`/`, getuser);
userRouter.post(`/`, validate(addUserSchema), postNewUser);

export default userRouter;
