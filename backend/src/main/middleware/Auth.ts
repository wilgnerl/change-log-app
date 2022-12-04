import { MiddlewareAdapter } from "../adapters";
import { MakeAuthMiddlewareController } from "../factories/Middleware/controller/MakeAuthMiddlewareController";

export const auth = MiddlewareAdapter(MakeAuthMiddlewareController());