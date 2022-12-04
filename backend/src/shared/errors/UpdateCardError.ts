export class UpdateCardError extends Error {
	constructor () {
		super("Error during update or card not exists");
		this.name = "UpdateCardError";
	}
}