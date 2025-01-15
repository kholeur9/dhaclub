import { Resolver, Query, Mutation, Args, ResolveReference, Context } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { AuthGuard } from "./guards/auth.guards";
import { UsersService } from "./users.service";
import { User } from "./entities/users.entities";
import { LoginDto, RegisterDto } from "./dto/users.dto";
import { LoginResponse, RegisterResponse } from "./types/users.types";
import { Request } from "express";
import { isStrongPassword } from "class-validator";


@Resolver(() => User)
export class UsersResolver {
    constructor(
        private readonly usersService:UsersService
    ) {}

    @Mutation(() => RegisterResponse)
    async registerUser(@Args('registerInput') registerDto : RegisterDto) : Promise<RegisterResponse> {
        return await this.usersService.Register(registerDto);
    }

    @Mutation(() => LoginResponse)
    async loginUser(
        @Args('email') email: string, 
        @Args('password') password: string): Promise<LoginResponse> {
            console.log("Rsolver :", {email, password})
        return await this.usersService.Login({ email, password})
    }

    @Query(() => LoginResponse)
    @UseGuards(AuthGuard)
    async getUser(@Context() context: { req: Request }){
        return await this.usersService.getUser(context.req);
    }
}