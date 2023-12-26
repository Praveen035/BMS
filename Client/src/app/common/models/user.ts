import { Role } from "../enum/role";
import { BaseModel } from "./base-model";

export class User extends BaseModel {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
}
