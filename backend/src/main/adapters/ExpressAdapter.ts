import { Request, Response } from "express";
import { Controller } from "../../shared/protocols";

export const RouteAdapter = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		const request = {
			body: req.body,
			params: req.params
		};

		const httpResponse = await controller.handle(request);

		if(httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299){
			res.status(httpResponse.statusCode).json(httpResponse.body);
		} else{
			res.status(httpResponse.statusCode).json({
				error: httpResponse.body.message
			});
		}
	};
};