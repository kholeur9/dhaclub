import { ObjectType, Field, Directive } from "@nestjs/graphql"


@ObjectType()
@Directive('key(field: "id")')
export class User {
    @Field({ nullable: true })
    id?: string;

    @Field()
    first_name?: string;

    @Field()
    last_name?: string;

    @Field({ nullable: true })
    email?: string;

    @Field({ nullable: true })
    pictureUrl?: string;

    @Field({ nullable: true })
    password?: string;

    @Field({ nullable: true })
    createdAd?: Date;

    @Field({ nullable: true })
    updatedAt?: Date; ou
}