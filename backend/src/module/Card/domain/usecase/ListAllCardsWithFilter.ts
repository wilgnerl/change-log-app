import { Card } from "@prisma/client";

export interface ListAllCardsWithFilterInput{
    page: number
    limit: number
    createdAt: Date
    creator: string
    title: string
} 

export interface ListAllCardsWithFilter{
    execute(input: ListAllCardsWithFilterInput): Promise<Card[]|boolean>
}