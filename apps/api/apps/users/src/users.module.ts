import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { DrizzleProvider } from '../../drizzle/drizzle.provider';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      }
    })
  ],
  controllers: [],
  providers: [UsersService, ConfigService, JwtService, ...DrizzleProvider],
})
export class UsersModule {}