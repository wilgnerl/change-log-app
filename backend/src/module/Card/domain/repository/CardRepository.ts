import { Card } from "@prisma/client";

export interface CreateInput{
    title: string
    createdBy: string
    description: unknown
}

export interface FindByIdInput{
    cardId: string
}

export interface DeleteInput{
    cardId: string
}

export interface CardRepository{
    create(input: CreateInput): Promise<boolean>
    findById(input: FindByIdInput): Promise<Card|boolean>
    delete(input: DeleteInput): Promise<boolean>
    
}