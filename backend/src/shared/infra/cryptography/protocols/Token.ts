export interface Token{
    generateAccessToken(plainText: string): Promise<string>
    generateRefreshToken(plainText: string): Promise<string>
    decrypt(plainText: string): Promise<string>
}