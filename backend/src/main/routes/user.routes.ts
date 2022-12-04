import { Router } from "express";
import { RouteAdapter } from "../adapters";
import { MakeSignInController, MakeSignUpController } from "../factories/controller";

const userRouter = Router();

userRouter.post("/signup", RouteAdapter(MakeSignUpController()));
userRouter.post("/signin", RouteAdapter(MakeSignInController()));

export {userRouter};