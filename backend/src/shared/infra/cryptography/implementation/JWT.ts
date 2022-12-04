import jwt from "jsonwebtoken";
import { Token } from "../protocols/Token";

export class JWT implements Token{
	constructor(
        private readonly secretAccessToken: string,
        private readonly secretRefreshToken: string
	){}
	async generateAccessToken(plainText: string): Promise<string> {
		return jwt.sign({id: plainText}, this.secretAccessToken, {expiresIn: 900});

	}
	async generateRefreshToken(plainText: string): Promise<string> {
		return jwt.sign({id: plainText}, this.secretRefreshToken, {expiresIn: 86400});
	}
	async decryptAccessToken(plainText: string): Promise<any> {
		return jwt.verify(plainText, this.secretAccessToken);
	}
	async decryptRefreshToken(plainText: string): Promise<any> {
		return jwt.verify(plainText, this.secretRefreshToken);
	}

}