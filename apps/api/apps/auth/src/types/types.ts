import { ObjectType, Field } from "@nestjs/graphql";
import { User } from "apps/users/src/types/user.type";


@ObjectType()
export class LoginResponse {
    @Field(() => User)
    user: User;
}