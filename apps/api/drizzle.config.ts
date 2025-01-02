//import 'dotenv/config';
import "dotenv/config"
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle/types',
  schema: './apps/drizzle/schema/**.schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})