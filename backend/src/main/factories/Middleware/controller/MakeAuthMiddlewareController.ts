import { AuthMiddlewareController } from "../../../../module/Middleware/controller/";
import { Middleware } from "../../../../shared/protocols";
import { MakeAuthMiddlewareUseCase } from "../usecase";

export const MakeAuthMiddlewareController = (): Middleware => {
	const middleware = new AuthMiddlewareController(
		MakeAuthMiddlewareUseCase()
	);

	return middleware;
};