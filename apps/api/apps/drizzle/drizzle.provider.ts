import { ConfigService } from '@nestjs/config'
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import * as schema from './schema/users.schema'

export const DrizzleAsyncProvider = "DrizzleProvider";

export const DrizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    inject: [ConfigService],
    useFactory: async (configService : ConfigService) => {
      const connectionString = configService.get<string>('DATABASE_URL');
      const pool = new Pool({
        connectionString,
      });

      return drizzle(pool, {schema}) as NodePgDatabase<typeof schema>
    },
  },
];