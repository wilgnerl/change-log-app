export class SignUpError extends Error {
	constructor () {
		super("Password is not equal PasswordConfirmation or User already exists");
		this.name = "SignUpError";
	}
}