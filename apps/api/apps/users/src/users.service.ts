import { BadRequestException, Inject, Injectable } from '@nestjs/common';
//import { DrizzleDB } from '../../drizzle/types/drizzle';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/users.dto';
import { eq } from 'drizzle-orm';
import { userTable } from '../../drizzle/schema/users.schema';
import * as bcrypt from "bcryptjs"
import { DrizzleAsyncProvider } from '../../drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as sc from "@api/drizzle/schema/schema"
// Importer les types générés automatiquement par drizzle
import { InferSelectModel } from 'drizzle-orm';
//import { LoginResponse } from './types/users.types';


@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db : any,
    private readonly configService : ConfigService,
  ){}

  // Login User
  async Login(loginDto: LoginDto){
    console.log('Service:', loginDto)
    const { email, password } = loginDto;

    const user = await this.db.query.userTable.findMany({
      where: eq(userTable.email, email)
    })

    console.log(user.email)

    if (user && (await bcrypt.compare(password, user.password))){
      return user;
    } else {
      return {
        user: null,
      }
    }
  }
}
