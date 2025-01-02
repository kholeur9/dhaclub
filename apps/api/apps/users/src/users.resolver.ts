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

    @Mutation(() => LoginResponse)
    async loginUser(@Args('LoginDto') loginDto: LoginDto): Promise<LoginResponse> {
        return this.usersService.Login(loginDto)
    }
}