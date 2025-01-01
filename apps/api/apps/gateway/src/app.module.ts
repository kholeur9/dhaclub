import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from 'apps/auth/src/auth.module';
import { UsersModule } from 'apps/users/src/users.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    DrizzleModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}