import { User } from "@prisma/client";
import { Bcrypt, JWT } from "../../../shared/infra/cryptography";
import { UserRepository } from "../domain/repository";
import { SignIn, SignInInput, SignInOutput } from "../domain/usecases";

export class SignInUseCase implements SignIn{
	constructor(
        private readonly userRepository: UserRepository,
        private readonly bcrypt: Bcrypt,
        private readonly jwt: JWT
	){}
	async execute({email, password}: SignInInput): Promise<SignInOutput|boolean>{
		const accountExists = await this.userRepository.findByEmail({email});
		if(!accountExists){
			return false;
		}

		const isValid = await this.bcrypt.compare(password, (accountExists as User).password);
		if(!isValid){
			return false;
		}

		const accessToken = await this.jwt.generateAccessToken((accountExists as User).id);
		const refreshToken = await this.jwt.generateRefreshToken((accountExists as User).id);

		await this.userRepository.update({userId:(accountExists as User).id ,refreshToken});

		return {
			userId: (accountExists as User).id,
			accessToken,
			refreshToken
		};

	}

}