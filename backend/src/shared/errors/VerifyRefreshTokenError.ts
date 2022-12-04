export class VerifyRefreshTokenError extends Error {
	constructor () {
		super("Token invalid");
		this.name = "AccessDeniedError";
	}
}