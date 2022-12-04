import { Card } from "@prisma/client";
import { CardRepository } from "../domain/repository";
import { AddNewDescription, AddNewDescriptionInput } from "../domain/usecase";

export class AddNewDescriptionUseCase implements AddNewDescription{
	constructor(
        private readonly cardRepository: CardRepository,
	){}
	async execute({cardId, description, accountId}: AddNewDescriptionInput): Promise<boolean> {
		const cardExists = await this.cardRepository.findById({cardId});
		if(!cardExists){
			return false;
		}

		const newDescription = {
			text: description,
			createdAt: new Date().toISOString(),
			createdBy: accountId
		};

		(cardExists as Card).descriptions.push(newDescription);
        
		const data = {
			title: (cardExists as Card).title,
			descriptions: (cardExists as Card).descriptions,
			status: (cardExists as Card).status
		};
        
		await this.cardRepository.update({cardId, ...data});

		return true;

	}
	

}