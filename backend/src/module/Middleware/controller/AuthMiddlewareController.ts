import { AccessDeniedError } from "../../../shared/errors";
import { forbidden, serverError, sucess } from "../../../shared/helpers";
import { HttpResponse, Middleware } from "../../../shared/protocols";
import { ValidateToken } from "../domain";

export class AuthMiddlewareController implements Middleware{
	constructor(
        private readonly validateToken: ValidateToken
	){}
	async handle(request: AuthMiddleware): Promise<HttpResponse> {
		try{
			const {accessToken} = request;
			if(accessToken){
				const result = await this.validateToken.execute({accessToken});
				
				if(result){
					return sucess({accountId: result.account.id});
				}
			}
			return forbidden(new AccessDeniedError());

		} catch(err){
			console.log(err);
			return serverError(err as Error);
		}
	}

}

export interface AuthMiddleware{
    accessToken?: string
}