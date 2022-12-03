import { User } from "@prisma/client";

export interface CreateInput{
    email: string,
    passwordHashed: string
}

export interface FindByEmailInput{
    email: string
}

export interface UserRepository{
    create(input: CreateInput): Promise<boolean>
    findByEmail(input: FindByEmailInput): Promise<User|boolean>
}