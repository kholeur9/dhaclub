import { ObjectType, Field, Directive } from "@nestjs/graphql"


@ObjectType()
@Directive('@key(fields:"id")')
export class User {
    @Field()
    id: number;

    @Field()
    first_name: string;

    @Field()
    last_name: string;

    @Field()
    email: string;

    @Field()
    pictureUrl: string;

    @Field()
    password: string;

    @Field()
    createdAd: Date;

    @Field()
    updatedAt: Date;
}