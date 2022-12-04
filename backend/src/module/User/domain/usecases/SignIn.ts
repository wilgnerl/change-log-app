export interface SignInInput{
    email: string,
    password: string
}

export interface SignInOutput{
    userId: string
    accessToken: string
    refreshToken: string
}

export interface SignIn{
    execute(input: SignInInput): Promise<SignInOutput|boolean>
}