import { Resolver, Query, Mutation, Args, ResolveReference, } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { User } from "./entities/users.entities";
import { LoginDto } from "./dto/users.dto";
import { LoginResponse } from "./types/users.types";


@Resolver(() => User)
export class UsersResolver {
    constructor(
        private readonly usersService:UsersService
    ) {}

    @Query(() => [User])
    async findAllUsers(){
        return [];
    }

    @Mutation(() => LoginResponse)
    async loginUser(
        @Args('email') email: string, 
        @Args('password') password: string): Promise<LoginResponse> {
        return await this.usersService.Login({ email, password})
    }
}