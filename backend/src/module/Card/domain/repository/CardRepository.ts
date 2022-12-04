import { Prisma } from "@prisma/client";

export interface CreateInput{
    title: string
    createdBy: string
    description: unknown
}


export interface CardRepository{
    create(input: CreateInput): Promise<boolean>
    
}