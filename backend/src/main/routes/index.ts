import { Router, Request, Response } from "express";
import { cardRouter } from "./card.routes";
import { userRouter } from "./user.routes";

const route = Router();

route.use("/user", userRouter);
route.use("/card", cardRouter);

route.get("/", (req: Request, res: Response) => {
	res.json({
		message: "Hello World"
	});
});

export {route};