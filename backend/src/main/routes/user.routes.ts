import { Router } from "express";
import { RouteAdapter } from "../adapters";
import { MakeSignInController, MakeSignUpController } from "../factories/User/controller";
import { MakeVerifyRefreshTokenController } from "../factories/User/controller/MakeVerifyRefreshTokenController";

const userRouter = Router();

userRouter.post("/signup", RouteAdapter(MakeSignUpController()));
userRouter.post("/signin", RouteAdapter(MakeSignInController()));
userRouter.post("/refresh", RouteAdapter(MakeVerifyRefreshTokenController()));

export {userRouter};