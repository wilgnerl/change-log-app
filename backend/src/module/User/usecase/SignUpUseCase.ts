import { Bcrypt } from "../../../shared/infra/cryptography";
import { UserRepository } from "../domain/repository";
import { SignUp, SignUpInput } from "../domain/usecases";

export class SignUpUseCase implements SignUp{
	constructor(
        private readonly userRepository: UserRepository,
        private readonly bcrypt: Bcrypt
	){}
	async execute({email, password, passwordConfirmation, name}: SignUpInput): Promise<boolean> {
		const userExists = await this.userRepository.findByEmail({email});
		if(userExists){
			return false;
		}

		if(password !== passwordConfirmation){
			return false;
		}

		const passwordHashed = await this.bcrypt.hash(password); 
		await this.userRepository.create({email, passwordHashed, name});
        
		return true;
	}
}