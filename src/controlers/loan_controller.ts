import { loan } from "@prisma/client";
import { count } from "console";
import { Request, Response } from "express";
import { prisma } from "../config/DB";
import { paramsType } from "../zodSchema/zod_Schema";


export const getAllLoan = async (req: Request, res: Response) => {
  try {
    const allloan = await prisma.loan.findMany();
    return res.status(200).json(allloan);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};


export const addNewLoan = async (req: Request, res: Response) => {
  try {
    const newLoan = req.body as loan;
    await prisma.loan.create({ data: newLoan });

    return res.status(201).json({
      message: "laon added",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};


export const lendBooks = async (req: Request, res: Response) => {
  try {
    const {userid} = req.params as paramsType;

    const getUserBooks = await prisma.users.findUnique({
      
      where: {id:userid},
      select: {
        username: true,
        loan: true,
      },
    });

    return res.status(200).json(getUserBooks);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "server error !",
    });
  }
};
