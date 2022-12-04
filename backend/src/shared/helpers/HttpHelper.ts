import { ServerError } from "../errors";
import { HttpResponse } from "../protocols";

export const sucess = (data: any): HttpResponse => {
	return {
		body: data,
		statusCode: 200
	};
};

export const badRequest = (error: Error): HttpResponse => {
	return {
		body: error,
		statusCode: 400
	};
};

export const serverError = (error: Error): HttpResponse => ({
	statusCode: 500,
	body: new ServerError(String(error.stack))
});