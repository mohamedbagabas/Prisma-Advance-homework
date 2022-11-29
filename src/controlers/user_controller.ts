import { user } from "@prisma/client";
import { Response, Request } from "express";
import { prisma } from "../config/DB";

export const getuser = async (req: Request, res: Response) => {
  try {
    const getuser = await prisma.user.findMany();
    return res.status(200).json(getuser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "server Error !",
    });
  }
};

export const postNewUser = async (req: Request, res: Response) => {
  try {
    const newUser = req.body as user;

    await prisma.user.create({
      data: newUser,
    });
    return res.status(200).json({
      message: "user added !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "server Error !",
    });
  }
};
