export class DeleteCardError extends Error {
	constructor () {
		super("Error during card delete or card not exists");
		this.name = "DeleteCardError";
	}
}