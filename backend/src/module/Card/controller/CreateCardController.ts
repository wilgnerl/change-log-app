import { CreateCardError, MissingParamError } from "../../../shared/errors";
import { badRequest, serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { CreateCard } from "../domain/usecase";

export class CreateCardController implements Controller{
	constructor(
        private readonly createCardUseCase: CreateCard
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			const paramsRequired = ["title", "description"];
			for(const param of paramsRequired){
				if(!httpRequest.body[param]){
					return badRequest(new MissingParamError(param));
				}
			}

			const {title, description, accountId: createdBy} = httpRequest.body;
			const response = await this.createCardUseCase.execute({title, createdBy, description});

			if(!response){
				return badRequest(new CreateCardError());
			}

			return sucess("Card created!");
		}catch(err){
			return serverError(err as Error);
		}
	}

}