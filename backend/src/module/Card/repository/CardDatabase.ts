import { CardRepository, CreateInput, DeleteInput, FindByIdInput, ListAllInput, listAllWithFilterInput, UpdateCardInput } from "../domain/repository";
import prisma from "../../../shared/infra/database/Prisma/Database";
import { Card, Prisma } from "@prisma/client";

export class CardDatabase implements CardRepository{
	async listAllWithFilter({page, limit, createdAt: date, creator, title}: listAllWithFilterInput): Promise<Card[]> {
		
		if(date == null && creator == null && title != null){
			const cards = await prisma.card.findMany({
				skip:(page-1)*limit,
				take:limit,
				where:{
					title
				}
			});
    
			return cards;
		} else if(date == null && creator != null && title == null){
			const cards = await prisma.card.findMany({
				skip:(page-1)*limit,
				take:limit,
				where:{
					creatorName: creator
				}
                
                
			});
    
			return cards;
		} else if(date != null && creator != null && title != null){
			const newDate = new Date(date);
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			const cards = await prisma.card.findMany({
				skip:(page-1)*limit,
				take:limit,
				where:{
					title,
					creatorName: creator,
					createdAt:{
						gt: newDate
					}
				}
                
                
			});
    
			return cards;
		} else if(date != null && creator != null && title == null){
			const newDate = new Date(date);
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			const cards = await prisma.card.findMany({
				skip:(page-1)*limit,
				take:limit,
				where:{
                    
					creatorName: creator,
					createdAt:{
						gt: newDate
					}
				}
                
                
			});
    
			return cards;
		} else if(date != null && creator == null && title == null){
			const newDate = new Date(date);
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			const cards = await prisma.card.findMany({
				skip:(page-1)*limit,
				take:limit,
				where:{
					createdAt:{
						gt: newDate
					}
				}
                
                
			});
    
			return cards;
		} else if(date != null && creator == null && title != null){
			const newDate = new Date(date);
			newDate.setHours(0);
			newDate.setMinutes(0);
			newDate.setSeconds(0);
			const cards = await prisma.card.findMany({
				skip:(page-1)*limit,
				take:limit,
				where:{
					title,
					createdAt:{
						gt: newDate
					}
				}
                
                
			});
    
			return cards;
		} else if(date == null && creator != null && title != null){
			
			const cards = await prisma.card.findMany({
				skip:(page-1)*limit,
				take:limit,
				where:{
					title,
					creatorName: creator
				}
                
                
			});
    
			return cards;
		}
		const cards = await prisma.card.findMany({
			skip:(page-1)*limit,
			take:limit
		});

		return cards;
			
	}
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
		await prisma.card.delete({
			where:{
				id: cardId
			}
		});

		return true;
	}
	async create({title, description, createdBy, creatorName}: CreateInput): Promise<boolean> {
		await prisma.card.create({
			data:{
				title,
				descriptions: description as Prisma.JsonArray,
				createdBy, 
				creatorName
			}
		});

		return true;
	}

}