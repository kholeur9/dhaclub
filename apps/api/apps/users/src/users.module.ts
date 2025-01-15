import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { DrizzleProvider } from '../../drizzle/drizzle.provider';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      //playground: true,
    })
  ],
  controllers: [],
  providers: [UsersService, ConfigService, JwtService, ...DrizzleProvider, UsersResolver],
})
export class UsersModule {}