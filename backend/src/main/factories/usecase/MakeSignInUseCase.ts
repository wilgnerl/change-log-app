import { SignIn } from "../../../module/User/domain/usecases";
import { UserDatabase } from "../../../module/User/repository";
import { SignInUseCase } from "../../../module/User/usecase";
import { JWT, Bcrypt } from "../../../shared/infra/cryptography";

export const MakeSignInUseCase = (): SignIn => {
	const userRepository = new UserDatabase();
	const salt = Number(process.env.SALT);
	const bcrypt = new Bcrypt(salt);
	const jwt = new JWT(
		process.env.SECRET_ACCESS_TOKEN as string,
		process.env.SECRET_REFRESH_TOKEN as string
	);
	return new SignInUseCase(userRepository, bcrypt, jwt);
};