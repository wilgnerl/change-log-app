import { CardRepository } from "../domain/repository";
import { CreateCard, CreateCardInput } from "../domain/usecase";

export class CreateCardUseCase implements CreateCard{
	constructor(
        private readonly cardRepository: CardRepository,
	){}
	async execute({title, createdBy, description}: CreateCardInput): Promise<boolean> {
		const descriptionObject = [
			{
				text: description,
				createdAt: new Date(),
				createdBy: createdBy
			}
		];
		await this.cardRepository.create({title, createdBy, description: descriptionObject});
		return true;
	}

}