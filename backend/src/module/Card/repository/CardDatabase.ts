import { CardRepository, CreateInput, DeleteInput, FindByIdInput, ListAllInput, UpdateCardInput } from "../domain/repository";
import prisma from "../../../shared/infra/database/Prisma/Database";
import { Card, Prisma } from "@prisma/client";

export class CardDatabase implements CardRepository{
	async update({cardId, ...restOfInput}: UpdateCardInput): Promise<boolean> {
		await prisma.card.update({
			where:{
				id: cardId
			},
			data: restOfInput
		});

		return true;
	}
	async listAll({page, limit}: ListAllInput): Promise<Card[]> {
		const cards = await prisma.card.findMany({
			skip:(page-1)*limit,
			take:limit
		});

		return cards;
	}
	async findById({cardId}: FindByIdInput): Promise<boolean | Card> {
		const card = await prisma.card.findFirst({
			where:{
				id: cardId
			}
		});

		if(card === null){
			return false;
		}

		return card;
	}
	async delete({cardId}: DeleteInput): Promise<boolean> {
		console.log(cardId);
		await prisma.card.delete({
			where:{
				id: cardId
			}
		});

		return true;
	}
	async create({title, description, createdBy}: CreateInput): Promise<boolean> {
		await prisma.card.create({
			data:{
				title,
				descriptions: description as Prisma.JsonArray,
				createdBy
			}
		});

		return true;
	}

}