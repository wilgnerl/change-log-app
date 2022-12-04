import { CreateInput, FindByEmailInput, FindByIdInput, UpdateInput, UserRepository } from "../domain/repository";
import { User } from "@prisma/client";
import prisma from "../../../shared/infra/database/Prisma/Database";

export class UserDatabase implements UserRepository{
    
	async create({email, passwordHashed, name}: CreateInput): Promise<boolean> {
		await prisma.user.create({
			data:{
				email,
				password: passwordHashed,
				name
			}
		});
        
		return true;
	}
	async findByEmail({email}: FindByEmailInput): Promise<User|boolean> {
		const userExists = await prisma.user.findFirst({
			where:{
				email
			}
		});

		if(!userExists){
			return false;
		}

		return userExists;
	}
	async findById({id}: FindByIdInput): Promise<User|boolean> {
		const userExists = await prisma.user.findFirst({
			where:{
				id
			}
		});

		if(!userExists){
			return false;
		}

		return userExists;
	}
	async update({userId, ...restOfInput}: UpdateInput): Promise<boolean> {
		await prisma.user.update({
			where:{
				id: userId
			},
			data:restOfInput
		});

		return true;
	}


    
}