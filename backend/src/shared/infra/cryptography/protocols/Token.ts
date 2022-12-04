export interface Token{
    generateAccessToken(plainText: string): Promise<string>
    generateRefreshToken(plainText: string): Promise<string>
    decryptAccessToken(plainText: string): Promise<any>
    decryptRefreshToken(plainText: string): Promise<any>
}