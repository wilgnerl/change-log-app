export interface SignUpInput{
    email: string,
    password: string
    passwordConfirmation: string
}

export interface SignUp{
    execute(input: SignUpInput): Promise<boolean>
}