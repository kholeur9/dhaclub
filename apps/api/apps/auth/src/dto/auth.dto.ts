import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty, IsEmail, IsString, MinLength } from "class-validator";


@InputType()
export class LoginDto{
    @Field()
    @IsNotEmpty({ message: "E-mail requi."})
    @IsEmail({}, { message: "L'e-mail doit être valide."})
    email: string;

    @Field()
    @IsNotEmpty({ message: "Mot de passe requi."})
    password: string;
}