import { User } from "@prisma/client";

export interface ValidateTokenInput{
    accessToken: string
}

export interface ValidateTokenOutput{
    account: User
}

export interface ValidateToken{
    execute(input: ValidateTokenInput): Promise<ValidateTokenOutput|null>
}