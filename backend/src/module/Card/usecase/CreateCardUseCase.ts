import { User } from "@prisma/client";
import { UserRepository } from "../../User/domain/repository";
import { CardRepository } from "../domain/repository";
import { CreateCard, CreateCardInput } from "../domain/usecase";

export class CreateCardUseCase implements CreateCard{
	constructor(
        private readonly cardRepository: CardRepository,
        private readonly userRepository: UserRepository,
	){}
	async execute({title, createdBy, description}: CreateCardInput): Promise<boolean> {
		const descriptionObject = [
			{
				text: description,
				createdAt: new Date(),
				createdBy: createdBy
			}
		];

		const user = await this.userRepository.findById({id: createdBy});

		await this.cardRepository.create({title, createdBy, description: descriptionObject, creatorName: (user as User).name});
		return true;
	}

}