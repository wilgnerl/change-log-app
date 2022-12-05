import { MissingParamError, UpdateCardError } from "../../../shared/errors";
import { badRequest, serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { UpdateCard } from "../domain/usecase";

export class UpdateCardController implements Controller{
	constructor(
        private readonly updateCardUseCase: UpdateCard
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			if(!(httpRequest.params["cardId"])){
				return badRequest(new MissingParamError("cardId"));
			}
			
			const {cardId} = httpRequest.params;
			const {accountId, ...restOfdata} = httpRequest.body;
			const response = await this.updateCardUseCase.execute({cardId, data:restOfdata});

			if(!response){
				return badRequest(new UpdateCardError());
			}

			return sucess("Card Updated!");
		}catch(err){
			return serverError(err as Error);
		}
	}

}