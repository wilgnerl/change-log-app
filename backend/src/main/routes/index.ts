import { Router, Request, Response } from "express";
import { userRouter } from "./user.routes";

const route = Router();

route.use("/user", userRouter);

route.get("/", (req: Request, res: Response) => {
	res.json({
		message: "Hello World"
	});
});

export {route};