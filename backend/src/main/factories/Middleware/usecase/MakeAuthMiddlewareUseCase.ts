import { ValidateToken } from "../../../../module/Middleware/domain";
import { ValidateTokenUseCase } from "../../../../module/Middleware/usecase";
import { UserDatabase } from "../../../../module/User/repository";
import { JWT } from "../../../../shared/infra/cryptography";

export const MakeAuthMiddlewareUseCase = (): ValidateToken => {
	const jwt = new JWT(
		process.env.SECRET_ACCESS_TOKEN as string,
		process.env.SECRET_REFRESH_TOKEN as string
	);
	const userRepository = new UserDatabase();

	return new ValidateTokenUseCase(
		jwt, 
		userRepository
	);
};