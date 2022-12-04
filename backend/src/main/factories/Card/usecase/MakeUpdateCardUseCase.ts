import { UpdateCard } from "../../../../module/Card/domain/usecase";
import { CardDatabase } from "../../../../module/Card/repository/CardDatabase";
import { UpdateCardUseCase } from "../../../../module/Card/usecase";

export const MakeUpdateCardUseCase = (): UpdateCard => {
	const cardRepository = new CardDatabase();

	return new UpdateCardUseCase(cardRepository);
};