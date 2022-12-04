import { CardRepository, CreateInput } from "../domain/repository";
import prisma from "../../../shared/infra/database/Prisma/Database";
import { Prisma } from "@prisma/client";

export class CardDatabase implements CardRepository{
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