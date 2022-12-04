export class SignInError extends Error {
	constructor () {
		super("Unauthorized");
		this.name = "UnauthorizedError";
	}
}