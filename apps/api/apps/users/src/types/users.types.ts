import { ObjectType, Field } from "@nestjs/graphql";
import { User } from "../entities/users.entities";

@ObjectType()
export class LoginResponse{

    @Field(() => User, { nullable: true })
    user: User | any;
}