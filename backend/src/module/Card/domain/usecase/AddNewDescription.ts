import { Card } from "@prisma/client";

export interface AddNewDescriptionInput{
    cardId: string
    description: string
    accountId: string
}

export interface AddNewDescription{
    execute(input: AddNewDescriptionInput): Promise<boolean>
}