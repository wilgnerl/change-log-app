import { Encrypter } from "../protocols/";
import bcrypt from "bcryptjs";

export class Bcrypt implements Encrypter{
	constructor(
        private readonly salt: number
	){}
	async hash(plainText: string): Promise<string> {
		return bcrypt.hash(plainText, this.salt);
	}
	async compare(plainText: string, encryptText: string): Promise<boolean> {
		return bcrypt.compare(plainText, encryptText);
	}

}