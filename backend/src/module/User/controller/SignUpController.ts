import { MissingParamError, SignUpError } from "../../../shared/errors";
import { badRequest, serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { SignUp } from "../domain/usecases";

export class SignUpController implements Controller{
	constructor(
        private readonly signUpUseCase: SignUp
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			const paramsRequired = ["email", "password", "passwordConfirmation", "name"];
			for(const param of paramsRequired){
				if(!httpRequest.body[param]){
					return badRequest(new MissingParamError(param));
				}
			}
			const {email, password, passwordConfirmation, name} = httpRequest.body;

			const response = await this.signUpUseCase.execute({name, email, password, passwordConfirmation});

			if(!response){
				return badRequest(new SignUpError());
			}

			return sucess("SignUp Completed !!");
		} catch(err){
			return serverError(err as Error);
		}
	}
}