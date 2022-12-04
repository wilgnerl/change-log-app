import { SignInController } from "../../../../module/User/controller";
import { Controller } from "../../../../shared/protocols";
import { MakeSignInUseCase } from "../usecase";


export const MakeSignInController = (): Controller => {
	const controller = new SignInController(
		MakeSignInUseCase()
	);

	return controller;
};