import { Card } from "@prisma/client";
import { CardRepository } from "../domain/repository";
import { ListAllCardsWithFilter, ListAllCardsWithFilterInput } from "../domain/usecase";

export class ListAllCardsWithFilterUseCase implements ListAllCardsWithFilter{
	constructor(
        private readonly cardRepository: CardRepository,
	){}
	async execute(input: ListAllCardsWithFilterInput): Promise<Card[]> {
		
		Object.keys(input).forEach((key) => input[key as keyof ListAllCardsWithFilterInput] == null && delete input[key as keyof ListAllCardsWithFilterInput]);
		const cardsFiltered = await this.cardRepository.listAllWithFilter({...input});
		return cardsFiltered;
	}

}