export interface VerifyRefreshTokenInput{
    userId: string,
    refreshToken: string
}

export interface VerifyRefreshTokenOutput{
    accessToken: string
}

export interface VerifyRefreshToken{
    execute(input: VerifyRefreshTokenInput): Promise<VerifyRefreshTokenOutput|boolean>
}