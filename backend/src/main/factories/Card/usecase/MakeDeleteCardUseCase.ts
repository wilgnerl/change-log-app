import { DeleteCard } from "../../../../module/Card/domain/usecase";
import { CardDatabase } from "../../../../module/Card/repository/CardDatabase";
import { DeleteCardUseCase } from "../../../../module/Card/usecase";

export const MakeDeleteCardUseCase = (): DeleteCard => {
	const cardRepository = new CardDatabase();

	return new DeleteCardUseCase(cardRepository);
};