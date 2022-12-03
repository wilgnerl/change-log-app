import { Router } from "express";
import { RouteAdapter } from "../adapters";
import { MakeSignUpController } from "../factories/controller";

const userRouter = Router();

userRouter.post("/signup", RouteAdapter(MakeSignUpController()));

export {userRouter};