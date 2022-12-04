import { MissingParamError, SignInError } from "../../../shared/errors";
import { badRequest, serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { SignIn } from "../../domain/usecases";

export class SignInController implements Controller{
	constructor(
        private readonly signInUseCase: SignIn
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			const paramsRequired = ["email", "password"];
			for(const param of paramsRequired){
				if(!httpRequest.body[param]){
					return badRequest(new MissingParamError(param));
				}
			}
			const {email, password} = httpRequest.body;

			const response = await this.signInUseCase.execute({email, password});

			if(!response){
				return badRequest(new SignInError());
			}

			return sucess(response);
		} catch(err){
			return serverError(err as Error);
		}
	}
}