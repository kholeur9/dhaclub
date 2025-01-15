import { CanActivate, Injectable, Inject, UnauthorizedException, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { DrizzleAsyncProvider } from '../../../drizzle/drizzle.provider';
import { eq } from 'drizzle-orm';
import { userTable } from '../../../drizzle/schema/users.schema';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private readonly db : any,
    private readonly jwtService : JwtService,
    private readonly configService : ConfigService,
  ) {}

  async canActivate(context: ExecutionContext) : Promise<boolean> {
    const contextGql = GqlExecutionContext.create(context);
    const request = contextGql.getContext().req;
    const access_token = request.headers.access_token;
    const refresh_token = request.headers.refresh_token;

    if (!access_token || !refresh_token) {
      throw new UnauthorizedException('Accès non autorisé.');
    }

    if (access_token) {
      const payload = await this.jwtService.verifyAsync(
        access_token,
        {
          secret: this.configService.get('JWT_SECRET')
        }
      );

      const expirationTime = payload.exp;
      const expirationInDate = new Date(expirationTime * 1000);

      if (expirationInDate < new Date()) {
        await this.newRefreshToken(request);
      }
    }
    return true;
  }

  private async newRefreshToken(request){
    try {
      const takeRefreshToken = request.headers.refresh_token;

      const payload = await this.jwtService.verifyAsync(takeRefreshToken);

      const getDateTimeExp = payload?.exp;
      const getInDate = new Date(getDateTimeExp * 1000);

      if (getInDate < new Date()) {
        throw new UnauthorizedException('Une reconnexion est nécessaire.');
      }

      const user = await this.db.query.userTable.findFirst({
        where: eq(userTable.id, payload.sub)
      })

      const newAccesstoken = await this.jwtService.signAsync({
        sub: user.id,
      }, {
        secret: this.configService.get('JWT_SECRET'),
        expiresIn: '1h',
      })

      const newRefreshToken = await this.jwtService.signAsync({
        sub: user.id,
      }, {
        secret: this.configService.get('JWT_SECRET'),
        expiresIn: '7d',
      })

      request.accesstotoken = newAccesstoken;
      request.refreshtoken = newRefreshToken;
      request.user = user;
        
    } catch {
      throw new UnauthorizedException('Accès non autorisé.');
    }
  }
}