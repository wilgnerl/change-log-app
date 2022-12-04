export interface DeleteCardInput{
    cardId: string
}

export interface DeleteCard{
    execute(input: DeleteCardInput): Promise<boolean>
}