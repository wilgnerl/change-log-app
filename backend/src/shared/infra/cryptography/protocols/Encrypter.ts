export interface Encrypter{
    hash(plainText: string): Promise<string>
    compare(plainText: string, encryptText: string): Promise<boolean>
}