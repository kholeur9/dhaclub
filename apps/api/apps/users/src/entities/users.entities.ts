import { ObjectType, Field, Directive } from "@nestjs/graphql"


@ObjectType()
@Directive('@key(fields:"id")')
export class Role {
    @Field()
    id: number;

    @Field({ nullable: true })
    name: string;
}

@ObjectType()
export class User {
    @Field()
    id: number;

    @Field()
    email: string;

    @Field(() => Role, { nullable: true })
    role?: Role;

    @Field()
    password: string;

    @Field()
    createdAt: string;

    @Field()
    updatedAt: string;
}

@ObjectType()
@Directive('@key(fields:"id")')
export class ProfileType {
    @Field()
    id: number;

    @Field({ nullable : true })
    name: string;
}

@ObjectType()
export class Profile {

    @Field()
    id: number;

    @Field(() => User)
    userId: User;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(() => ProfileType, { nullable: true })
    profileTypeId?: ProfileType;

    @Field({ nullable: true })
    picture: string;

    @Field({ nullable: true })
    phoneNumber: string;

    @Field({ nullable: true })
    address: string;

    @Field({ nullable: true })
    dateOfBirth: string;

}