import { CardRepository } from "../domain/repository";
import { UpdateCard, UpdateCardInput } from "../domain/usecase";

export class UpdateCardUseCase implements UpdateCard{
	constructor(
        private readonly cardRepository: CardRepository,
	){}
	async execute({cardId, data}: UpdateCardInput): Promise<boolean> {
		const cardExists = await this.cardRepository.findById({cardId});
		if(!cardExists){
			return false;
		}

		await this.cardRepository.update({cardId, ...data});

		return true;
	}
	

}