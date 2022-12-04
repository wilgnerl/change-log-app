import { NextFunction, Request, Response } from "express";
import { Middleware } from "../../shared/protocols";

export const MiddlewareAdapter = (middleware: Middleware) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		const request = {
			accessToken: req.headers?.authorization?.split(" ")[1],
			...(req.headers || {})
		};

		const httpResponse = await middleware.handle(request);
		if(httpResponse.statusCode === 200){
			Object.assign(req.body, httpResponse.body);
			next();
		} else{
			res.status(httpResponse.statusCode).json({
				error: httpResponse.body.message
			});
		}
	};
};