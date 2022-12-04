import { CreateCard } from "../../../../module/Card/domain/usecase";
import { CardDatabase } from "../../../../module/Card/repository/CardDatabase";
import { CreateCardUseCase } from "../../../../module/Card/usecase";
import { UserDatabase } from "../../../../module/User/repository";

export const MakeCreateCardUseCase = (): CreateCard => {
	const cardRepository = new CardDatabase();
	const userRepository = new UserDatabase();

	return new CreateCardUseCase(cardRepository, userRepository);
};