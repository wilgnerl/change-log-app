import { SignUp } from "../../../module/domain/usecases";
import { UserDatabase } from "../../../module/User/repository";
import { SignUpUseCase } from "../../../module/User/usecase";
import { Bcrypt } from "../../../shared/infra/cryptography";

export const MakeSignUpUseCase = (): SignUp => {
	const userRepository = new UserDatabase();
	const salt = Number(process.env.SALT);
	const bcrypt = new Bcrypt(salt);
	return new SignUpUseCase(userRepository, bcrypt);
};