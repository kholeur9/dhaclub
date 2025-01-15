import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class RegisterDto {
    @Field()
    @IsEmail({}, { message: 'E-mail est requis.'})
    @IsNotEmpty({ message : 'Le champ email est invalide.'})
    email: string;

    @Field()
    @IsString()
    @IsNotEmpty({ message : 'Le prenom est obligatoire.'})
    firstName: string;

    @Field()
    @IsString({ message : 'Le nom doit etre une chaine de caractere.'})
    @IsNotEmpty({ message : 'Le nom est obligatoire.'})
    lastName: string;

    @Field()
    @IsNotEmpty({ message : 'Le mot de passe est requis.'})
    @MinLength(8, { message : 'Le mot de passe doit contenir au moins 8 caractères.'})
    password: string;

    @Field()
    @IsNotEmpty({ message : 'Le role est requis.'})
    role: number;

    @Field()
    @IsNotEmpty({ message : 'Le type de profil est requis.'})
    profileTypeId: number;
}

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