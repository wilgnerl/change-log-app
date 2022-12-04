import { User } from "@prisma/client";
import { JwtPayload } from "jsonwebtoken";
import { JWT } from "../../../shared/infra/cryptography";
import { UserRepository } from "../../User/domain/repository";
import { ValidateToken, ValidateTokenInput, ValidateTokenOutput } from "../domain";

export class ValidateTokenUseCase implements ValidateToken{
	constructor(
        private readonly jwt: JWT,
        private readonly userRepository: UserRepository
	){}
	async execute({accessToken}: ValidateTokenInput): Promise<ValidateTokenOutput|null> {
		let token: any;
		try{
			token = await this.jwt.decryptAccessToken(accessToken);   
		} catch(err){
			return null;
		}
		if(token && token["id"]){
			const account = await this.userRepository.findById({id: token.id});
			if(account){
				return {
					account: (account as User)
				};
			}
		}
		return null;
	}

}