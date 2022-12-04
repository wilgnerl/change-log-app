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

export interface ListAllInput{
    page: number
    limit: number
}

type Status = "InProgress" | "Closed"

export interface UpdateCardInput{
    cardId: string
    title?: string
    descriptions?: {
        text: string,
        createdAt: string,
        createdBy: string
    }[]
    status: Status
}

export interface CardRepository{
    create(input: CreateInput): Promise<boolean>
    findById(input: FindByIdInput): Promise<Card|boolean>
    delete(input: DeleteInput): Promise<boolean>
    listAll(input: ListAllInput): Promise<Card[]>
    update(input: UpdateCardInput): Promise<boolean>
    
}