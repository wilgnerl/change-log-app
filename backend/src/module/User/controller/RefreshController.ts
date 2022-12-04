import { MissingParamError, VerifyRefreshTokenError } from "../../../shared/errors";
import { badRequest, serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { VerifyRefreshToken } from "../domain/usecases";

export class RefreshController implements Controller{
	constructor(
        private readonly verifyRefreshTokenUseCase: VerifyRefreshToken
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			const paramsRequired = ["userId", "refreshToken"];
			for(const param of paramsRequired){
				if(!httpRequest.body[param]){
					return badRequest(new MissingParamError(param));
				}
			}
			const {userId, refreshToken} = httpRequest.body;

			const response = await this.verifyRefreshTokenUseCase.execute({userId, refreshToken});
			console.log(response);
			if(!response){
				return badRequest(new VerifyRefreshTokenError());
			}

			return sucess(response);
		}catch(err){
			return serverError(err as Error);
		}
	}

}