import { ConfigService } from '@nestjs/config'
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres'
import * as schema from './schema/users.schema'

export const DrizzleAsyncProvider = "DrizzleProvider";
export const DrizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async (configService:ConfigService) => {
      const databaseURL = process.env.DATABASE_URL!;
      const pool = new Pool({
        connectionString: databaseURL,
        ssl: true,
      });
      return drizzle(pool, {schema}) as NodePgDatabase<typeof schema>
    },
    exports: [DrizzleAsyncProvider],
  },
]
