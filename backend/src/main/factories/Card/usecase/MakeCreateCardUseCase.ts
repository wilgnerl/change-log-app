import { CreateCard } from "../../../../module/Card/domain/usecase";
import { CardDatabase } from "../../../../module/Card/repository/CardDatabase";
import { CreateCardUseCase } from "../../../../module/Card/usecase";

export const MakeCreateCardUseCase = (): CreateCard => {
	const cardRepository = new CardDatabase();

	return new CreateCardUseCase(cardRepository);
};