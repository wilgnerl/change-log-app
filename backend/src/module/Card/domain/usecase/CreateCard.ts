export interface CreateCardInput{
    title: string
    createdBy: string
    description: unknown
}


export interface CreateCard{
    execute(input: CreateCardInput): Promise<boolean>
}