import { ConfigService } from '@nestjs/config';
import { userTable } from '../../../drizzle/schema/users.schema';
import { JwtService } from '@nestjs/jwt';
import { InferSelectModel } from "drizzle-orm";

export class TokenAttribution {
  constructor(
    private readonly configService : ConfigService,
    private readonly jwtService : JwtService,
  ) {}

  public async attributeToken(user: InferSelectModel<typeof userTable>) {
    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.id,
      },
      {
        expiresIn: '1h',
        secret: this.configService.get('JWT_SECRET'),
      }
    )

    const refreshToken = await this.jwtService.signAsync(
      {
        sub: user.id,
      },
      {
        expiresIn: '7d',
        secret: this.configService.get('JWT_SECRET'),
      }
    )

    return {
      user,
      accessToken,
      refreshToken,
    }
  }
}