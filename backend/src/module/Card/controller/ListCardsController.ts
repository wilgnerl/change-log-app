import { serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { ListCards } from "../domain/usecase";

export class ListCardsController implements Controller{
	constructor(
        private readonly listCardsUseCase: ListCards
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			const page = httpRequest.query.page === "" ? 1 : Number(httpRequest.query.page);
			const limit = httpRequest.query.limit === "" ? 10 : Number(httpRequest.query.limit);
			
			const response = await this.listCardsUseCase.execute({page, limit});

			return sucess(response);
		}catch(err){
			console.log(err);
			return serverError(err as Error);
		}
	}

}