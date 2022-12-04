import { MissingParamError, UpdateCardError } from "../../../shared/errors";
import { badRequest, serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { AddNewDescription } from "../domain/usecase";

export class AddNewDescriptionController implements Controller{
	constructor(
        private readonly addNewDescriptionUseCase: AddNewDescription
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			const paramsRequired = ["cardId", "description"];
			for(const param of paramsRequired){
				if(!httpRequest.body[param]){
					return badRequest(new MissingParamError(param));
				}
			}
			const {cardId, description, accountId} = httpRequest.body;

			const response = await this.addNewDescriptionUseCase.execute({cardId, description, accountId});

			if(!response){
				return badRequest(new UpdateCardError());
			}

			return sucess("New description added !!");
		} catch(err){
			console.log(err);
			return serverError(err as Error);
		}
	}

}