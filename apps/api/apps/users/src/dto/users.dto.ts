import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";


@InputType()
export class LoginDto {

    @Field()
    @IsEmail({}, { message : "Adresse e-mail invalide."})
    @IsNotEmpty({ message : "L'adresse e-mail est requie."})
    email: string;

    @Field()
    @IsNotEmpty({ message : "Le mot de passe est obligatoire."})
    password: string;
}