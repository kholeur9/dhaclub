import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/auth.dto';
import { DRIZZLE } from './drizzle/drizzle.module';
import { DrizzleDB } from './drizzle/types/drizzle';
import { eq } from 'drizzle-orm';
import { users } from './drizzle/schema/schema';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(DRIZZLE) 
    private db: DrizzleDB,
    private readonly configService: ConfigService,
  ){}

  // Login Service
  async Login(loginDto: LoginDto){

    try{
      const { email, password } = loginDto;
      const user = await this.db.query.users.findFirst({
        where: eq(users.email, email)
      })

      if (!user) {
        throw new Error("Email ou mot de passe invalide.")
      }

      if (email && (await compare(password, user.password))){
        const { password, ...result} = user;
        return result;
      }
      
    } catch (error){
      return {
        error: true,
        message: error.message,
      }
    }
  }

}
