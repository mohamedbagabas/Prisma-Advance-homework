import { book } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../config/DB";

export const getAllbook = async (req: Request, res: Response) => {
  try {
    const getbook = await prisma.book.findMany();
    return res.status(200).json(getbook);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "server Error !",
    });
  }
};

export const addNewBook = async (req: Request, res: Response) => {
  try {
    const newBook = req.body as book;
    await prisma.book.create({ data: newBook });

    return res.status(201).json({
      message: "book added !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      mrssage: "server Error !",
    });
  }
};
