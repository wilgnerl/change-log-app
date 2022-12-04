import { SignUpController } from "../../../module/User/controller";
import { Controller } from "../../../shared/protocols";
import { MakeSignUpUseCase } from "../usecase";

export const MakeSignUpController = (): Controller => {
	const controller = new SignUpController(
		MakeSignUpUseCase()
	);

	return controller;
};