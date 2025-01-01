import { Directive, Field, ObjectType } from "@nestjs/graphql";
//import { User } from "apps/users/src/entities/users.entities";


@ObjectType()
@Directive('key(fields: "id")')
export class Auth {
    @Field()
    id: string;
}