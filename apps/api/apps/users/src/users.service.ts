import { Inject, Injectable } from '@nestjs/common';
//import { DrizzleDB } from '../../drizzle/types/drizzle';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/users.dto';
import { eq } from 'drizzle-orm';
import { users } from '../../drizzle/schema/users.schema';
import * as bcrypt from "bcryptjs"
import { DrizzleAsyncProvider } from '../../drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from "@api/drizzle/schema/schema"

// Importer les types générés automatiquement par drizzle
import { InferSelectModel } from 'drizzle-orm';

type User = InferSelectModel<typeof users>

@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db : NodePgDatabase<typeof schema>,
    private readonly configService : ConfigService,
  ){}

  // Login User
  async Login(loginDto: LoginDto) : Promise<{ error: boolean; data?: any; message?: string}> {
    try {
      const user = await this.verifyUser(loginDto)
      if (!user) {
        throw new Error("E-mail ou mot de passe invalide.")
      }
      return {
        error: false,
        data: { 
          id: user.id
        }
      }
    } catch (error) {
      return {
        error: true,
        message: error.message,
      }
    }
  }

  // verify User
  async verifyUser(dto: LoginDto) : Promise<Partial<User> | null> {
    const user = await this.db.query.users.findFirst({
      where: eq(users.email, dto.email)
    });
    if (user && (await bcrypt.compare(dto.password, user.password))){
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
