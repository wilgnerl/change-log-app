import { CardRepository } from "../domain/repository";
import { DeleteCard, DeleteCardInput } from "../domain/usecase";

export class DeleteCardUseCase implements DeleteCard{
	constructor(
        private readonly cardRepository: CardRepository,
	){}
	async execute({cardId}: DeleteCardInput): Promise<boolean> {
		const cardExists = await this.cardRepository.findById({cardId});
		if(!cardExists){
			return false;
		}
        
		await this.cardRepository.delete({cardId});

		return true;
	}

}