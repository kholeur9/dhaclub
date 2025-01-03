import { 
  pgTable, 
  serial, 
  text, 
  timestamp, 
  uniqueIndex 
} from "drizzle-orm/pg-core";

import { InferSelectModel } from "drizzle-orm";


export const userTable = pgTable("users", {
  id: serial('id').primaryKey(),
  first_name: text('first_name').notNull(),
  last_name: text('last_name').notNull(),
  email: text('email').notNull(),
  pictureUrl: text('pictureUr').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
  updatedAt: timestamp('updatedAt').defaultNow().notNull(),
},(users) => {
  return {
    uniqueIdx: uniqueIndex('unique_idx').on(users.email)
  }
})