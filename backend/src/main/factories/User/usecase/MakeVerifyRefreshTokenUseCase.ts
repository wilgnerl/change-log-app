import { VerifyRefreshToken } from "../../../../module/User/domain/usecases";
import { VerifyRefreshTokenUseCase } from "../../../../module/User/usecase";
import { JWT } from "../../../../shared/infra/cryptography";

export const MakeVerifyRefreshTokenUseCase = (): VerifyRefreshToken => {
	const jwt = new JWT(
		process.env.SECRET_ACCESS_TOKEN as string,
		process.env.SECRET_REFRESH_TOKEN as string
	);
	return new VerifyRefreshTokenUseCase(jwt);
};