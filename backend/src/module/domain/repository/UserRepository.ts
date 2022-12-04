import { User } from "@prisma/client";

export interface CreateInput{
    email: string,
    passwordHashed: string
    name: string
}

export interface FindByEmailInput{
    email: string
}

export interface UpdateInput{
    userId: string
    name?: string
    refreshToken?: string
}

export interface UserRepository{
    create(input: CreateInput): Promise<boolean>
    findByEmail(input: FindByEmailInput): Promise<User|boolean>
    update(input: UpdateInput): Promise<boolean>
}