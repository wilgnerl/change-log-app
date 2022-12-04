import { RefreshController } from "../../../../module/User/controller";
import { Controller } from "../../../../shared/protocols";
import { MakeVerifyRefreshTokenUseCase } from "../usecase";

export const MakeVerifyRefreshTokenController = (): Controller => {
	const controller = new RefreshController(
		MakeVerifyRefreshTokenUseCase()
	);

	return controller;
};  