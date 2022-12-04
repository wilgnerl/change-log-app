import { Card } from "@prisma/client";

export interface ListCardsInput{
    page: number
    limit: number
}

export interface ListCards{
    execute(input: ListCardsInput): Promise<Card[]>
}