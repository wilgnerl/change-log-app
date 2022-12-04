import { AddNewDescription } from "../../../../module/Card/domain/usecase";
import { CardDatabase } from "../../../../module/Card/repository";
import { AddNewDescriptionUseCase } from "../../../../module/Card/usecase";

export const MakeAddNewDescriptionUseCase = (): AddNewDescription => {
	const cardRepository = new CardDatabase();

	return new AddNewDescriptionUseCase(cardRepository);
};