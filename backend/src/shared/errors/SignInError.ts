export class SignInError extends Error {
	constructor () {
		super("User os Password was incorrect or user not exists");
		this.name = "SignInError";
	}
}