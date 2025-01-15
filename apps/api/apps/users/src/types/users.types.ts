import { ObjectType, Field } from "@nestjs/graphql";
import { User, Profile } from "../entities/users.entities";

@ObjectType()
export class ErrorType{
    @Field()
    message: string;
}

@ObjectType()
export class RegisterResponse {
    @Field(() => User, { nullable: true })
    user?: User;

    @Field(() => Profile, { nullable: true })
    profile?: Profile;

    @Field(() => ErrorType, { nullable: true })
    error?: ErrorType;

    @Field()
    active_token: string;
}

@ObjectType()
export class LoginResponse {
    @Field(() => User, { nullable: true })
    user?: User;

    @Field({ nullable : true })
    accessToken?: string;

    @Field({ nullable : true })
    refreshToken?: string;

    @Field(() => ErrorType, { nullable: true})
    error?: ErrorType;
}