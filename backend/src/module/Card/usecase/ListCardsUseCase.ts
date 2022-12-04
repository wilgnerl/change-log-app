import { Card } from "@prisma/client";
import { CardRepository } from "../domain/repository";
import { ListCards, ListCardsInput } from "../domain/usecase";

export class ListCardsUseCase implements ListCards{
	constructor(
        private readonly cardRepository: CardRepository,
	){}
	async execute({page, limit}: ListCardsInput): Promise<Card[]> {
		const cards = await this.cardRepository.listAll({page, limit});
		
		return cards;
	}

}