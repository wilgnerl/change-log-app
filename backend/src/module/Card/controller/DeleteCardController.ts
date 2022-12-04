import { MissingParamError } from "../../../shared/errors";
import { DeleteCardError } from "../../../shared/errors/DeleteCardError";
import { badRequest, serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { DeleteCard } from "../domain/usecase";


export class DeleteCardController implements Controller{
	constructor(
        private readonly deleteCardUseCase: DeleteCard
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			if(!(httpRequest.params["cardId"])){
				return badRequest(new MissingParamError("cardId"));
			}
			
			const {cardId} = httpRequest.params;
			const response = await this.deleteCardUseCase.execute({cardId});

			if(!response){
				return badRequest(new DeleteCardError());
			}

			return sucess("Card Deleted!");
		}catch(err){
			console.log(err);
			return serverError(err as Error);
		}
	}

}