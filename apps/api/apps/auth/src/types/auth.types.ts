import { ObjectType, Field } from "@nestjs/graphql";
import { User } from "apps/users/src/entities/users.entities";


@ObjectType()
export class LoginResponse {
    @Field(() => User)
    user: User | any;
}