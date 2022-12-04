import { ListAllCardsWithFilter } from "../../../../module/Card/domain/usecase";
import { CardDatabase } from "../../../../module/Card/repository/CardDatabase";
import { ListAllCardsWithFilterUseCase } from "../../../../module/Card/usecase";

export const MakeListAllCardsWithFilterUseCase = (): ListAllCardsWithFilter => {
	const cardRepository = new CardDatabase();

	return new ListAllCardsWithFilterUseCase(cardRepository);
};