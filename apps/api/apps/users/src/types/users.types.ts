import { ObjectType, Field } from "@nestjs/graphql";
import { User } from "../entities/users.entities";

@ObjectType()
export class ErrorType{

    @Field()
    message: string;

    @Field({ nullable: true})
    hasError: boolean;
}

@ObjectType()
export class LoginResponse{
    @Field(() => User, { nullable: true})
    user?: User | any;

}