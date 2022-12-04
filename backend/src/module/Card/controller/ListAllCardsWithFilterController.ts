import { serverError, sucess } from "../../../shared/helpers";
import { Controller, HttpRequest, HttpResponse } from "../../../shared/protocols";
import { ListAllCardsWithFilter } from "../domain/usecase";

export class ListAllCardsWithFilterController implements Controller{
	constructor(
        private readonly listAllWithFilterUseCase: ListAllCardsWithFilter
	){}
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try{
			const page = httpRequest.query.page === "" ? 1 : Number(httpRequest.query.page);
			const limit = httpRequest.query.limit === "" ? 10 : Number(httpRequest.query.limit);
			const createdAt = httpRequest.query.date === "" ? null : httpRequest.query.date ;
			const creator = httpRequest.query.creator === ""  ? null : httpRequest.query.creator;
			const title = httpRequest.query.title === ""  ? null : httpRequest.query.title;

			const response = await this.listAllWithFilterUseCase.execute({
				page, 
				limit,
				createdAt,
				creator,
				title
			});

			return sucess(response);
		}catch(err){
			console.log(err);
			return serverError(err as Error);
		}
	}

}