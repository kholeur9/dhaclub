import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
//import { DrizzleDB } from '../../drizzle/types/drizzle';
import { ConfigService } from '@nestjs/config';
import { LoginDto, RegisterDto } from './dto/users.dto';
import { eq } from 'drizzle-orm';
import { userTable, profiles, roles, profileTypes } from '../../drizzle/schema/users.schema';
import * as bcrypt from "bcryptjs"
import { DrizzleAsyncProvider } from '../../drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as sc from "@api/drizzle/schema/schema"
import { TokenAttribution } from "./utils/attributeToken";


@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db : any,
    private readonly configService : ConfigService,
    private readonly jwtService: JwtService
  ){}

  // Register User
  async Register(registerDto: RegisterDto) {
    const { email, password, firstName, lastName, role, profileTypeId } = registerDto;

    const emailExists = await this.verifyEmail(email);

    if (emailExists) {
      throw new BadRequestException('Email already exists');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const recordUser = await this.db.transaction(async (tx) => {
      const user = await tx.insert(userTable).values({
        email,
        password: hashPassword,
        roleId: role,
      }).returning({
        id: userTable.id,
        email: userTable.email,
        role: userTable.roleId,
      })

      if (!user) {
        throw new Error('User not created');
      }
      
      const profile = await tx.insert(profiles).values({
          userId: user[0].id,
          firstName,
          lastName,
          profileTypeId,
      }).returning({
        id: profiles.id,
        userId: profiles.userId,
        firstName: profiles.firstName,
        lastName: profiles.lastName,
      })

      return {
        user,
        profile,
      }
    })
    return this.distributeToken(recordUser.user)
  }

  async distributeToken(user: any) {
    const [id, email, role] = user;
    const payload = {
      sub: id,
      email: email,
      role: role,
    }
    const secret = this.configService.get('JWT_SECRET');
    
    const active_token = await this.jwtService.signAsync({ payload },{ secret, expiresIn: '1h' })
    return {
      active_token,
      userId: user.id,
      role: user.role,
    }
  }

  // Login User
  async Login(loginDto: LoginDto){
    const user = await this.validateUser(loginDto);

    if (!user) {
      throw new BadRequestException('E-mail ou mot de passe invalide.');
    }

    if (user) {
      const tokenAttribute = new TokenAttribution(this.configService, this.jwtService)
      const tokens = await tokenAttribute.attributeToken(user)
      return {
        ...tokens,
        id: user.id,
      }
    } else {
      return {
        user: null,
        accessToken: null,
        refreshToken: null,
        error: {
          message: 'E-mail ou mot de passe invalide.',
        }
      }
    }
  }

  async validateUser(dataDto: LoginDto) {
    const user = await this.verifyEmail(dataDto.email);

    if (user && (await bcrypt.compare(dataDto.password, user.password))) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }

  async verifyEmail(email: string) {
    const user = await this.db.query.userTable.findFirst({
      where: eq(userTable.email, email),
    })
    return user;
  }

  async getUser(req: any){
    const user = req.user;
    const acessToken = req.access_token;
    const refreshToken = req.refresh_token;
    return {
      user,
      acessToken,
      refreshToken,
    }
  }
}
