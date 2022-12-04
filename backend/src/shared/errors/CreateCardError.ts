export class CreateCardError extends Error {
	constructor () {
		super("Error during card creation");
		this.name = "CreateCardError";
	}
}