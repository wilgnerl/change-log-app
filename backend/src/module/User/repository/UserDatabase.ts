import { CreateInput, FindByEmailInput, UserRepository } from "../../domain/repository";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class UserDatabase implements UserRepository{
	async create({email, passwordHashed}: CreateInput): Promise<boolean> {
		await prisma.user.create({
			data:{
				email,
				password: passwordHashed
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
    
}