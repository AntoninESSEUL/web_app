import { NextFunction, Request, Response } from "express";
import { Users } from "../models/Users";
import { UserService } from "../services/userService";

export class UserController {
  constructor(private userService: UserService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAll();
      res.json({
        status: 200,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const user = await this.userService.getById(id);
      res.json({
        status: 200,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  };
  //
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: Users = req.body;
      const newUser = await this.userService.create(userData);
      res.status(201).json({
        status: 201,
        data: newUser,
        message: "User created successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const userData: Users = req.body;
      const updatedUser = await this.userService.update(id, userData);
      res.json({
        status: 200,
        data: updatedUser,
        message: "User updated successfully",
      });
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await this.userService.delete(id);
      res.json({
        status: 200,
        message: "User deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  };
}
