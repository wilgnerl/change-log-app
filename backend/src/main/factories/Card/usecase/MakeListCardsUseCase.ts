import { ListCards } from "../../../../module/Card/domain/usecase";
import { CardDatabase } from "../../../../module/Card/repository/CardDatabase";
import { ListCardsUseCase } from "../../../../module/Card/usecase";

export const MakeListCardsUseCase = (): ListCards => {
	const cardRepository = new CardDatabase();

	return new ListCardsUseCase(cardRepository);
};