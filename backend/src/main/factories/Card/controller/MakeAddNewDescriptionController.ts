import { AddNewDescriptionController } from "../../../../module/Card/controller";
import { Controller } from "../../../../shared/protocols";
import { MakeAddNewDescriptionUseCase } from "../usecase";

export const MakeAddNewDescriptionController = (): Controller => {
	const controller = new AddNewDescriptionController(
		MakeAddNewDescriptionUseCase()
	);

	return controller;
};