import { Card } from "@prisma/client";

export interface CreateInput{
    title: string
    createdBy: string
    description: unknown
    creatorName: string
}

export interface FindByIdInput{
    cardId: string
}

export interface DeleteInput{
    cardId: string
}

export interface listAllWithFilterInput{
    page: number
    limit: number
    createdAt?: Date
    creator?: string
    title?: string
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
    }[] | any
    status: Status
}

export interface CardRepository{
    create(input: CreateInput): Promise<boolean>
    findById(input: FindByIdInput): Promise<Card|boolean>
    delete(input: DeleteInput): Promise<boolean>
    listAll(input: ListAllInput): Promise<Card[]>
    listAllWithFilter(input: listAllWithFilterInput): Promise<Card[]>
    update(input: UpdateCardInput): Promise<boolean>
    
}