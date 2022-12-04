import { JWT } from "../../../shared/infra/cryptography";
import { VerifyRefreshToken, VerifyRefreshTokenInput, VerifyRefreshTokenOutput } from "../domain/usecases";

export class VerifyRefreshTokenUseCase implements VerifyRefreshToken{
	constructor(
        private readonly jwt: JWT
	){}
	async execute({userId, refreshToken}: VerifyRefreshTokenInput): Promise<boolean | VerifyRefreshTokenOutput> {
		let isValid: any;
		try{
			isValid = await this.jwt.decryptRefreshToken(refreshToken);
			
		}catch(err){
			console.log(err);
			return false;
		}

		if(isValid && isValid["id"]){
			const newToken = await this.jwt.generateAccessToken(userId);
			return {
				accessToken: newToken
			};
		}

		return false;
	}

}