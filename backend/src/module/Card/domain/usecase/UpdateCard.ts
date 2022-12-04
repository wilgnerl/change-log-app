type Status = "InProgress" | "Closed"

export interface UpdateCardInput{
    cardId: string
    data:{
        title?: string
        descriptions?: {
            text: string,
            createdAt: string,
            createdBy: string
        }[]
        status: Status
    }
}

export interface UpdateCard{
    execute(input: UpdateCardInput): Promise<boolean>
}