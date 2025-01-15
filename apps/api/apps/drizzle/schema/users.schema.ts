import { 
  serial,
  varchar,
  integer,
  timestamp,
  boolean,
  pgTable,
  pgEnum
} from "drizzle-orm/pg-core";

import { InferSelectModel } from "drizzle-orm";

export const userTable = pgTable("users", {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  roleId: integer('role_id').references(() => roles.id).notNull(),
  createdAt: timestamp('createdAt', { mode: 'string'}).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { mode: 'string'}).defaultNow().notNull(),
})

export const roleEnum = pgEnum('roles', [
  'admin',
  'user',
  'moderator',
  'super-admin'
])

export const roles = pgTable('roles_users', {
  id: serial('id').primaryKey(),
  name: roleEnum("role").unique().notNull(),
})

export const profiles = pgTable('profiles', {
  id: serial('id').primaryKey().notNull(),
  userId: integer('user_id').references(() => userTable.id).notNull().unique(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  profileTypeId: integer('profileTypeId').references(() => profileTypes.id).notNull(),
  picture: varchar('picture'),
  phoneNumber: varchar('phone_number', { length: 255 }).unique(),
  address: varchar('address', { length: 255 }),
  dateOfBirth: varchar('date_of_birth', { length: 255 }),
  bio: varchar('bio', { length: 255 }),
})

export const profileTypeEnum = pgEnum('profileTypes', [
  'student',
  'jobseeker',
  'employer',
  'recruiter',
  'freeLancer',
  'professional',
  'agentGovernemental',
  'intern',
  'businessOwner'
])

export const profileTypes = pgTable('profileType', {
  id: serial('id').primaryKey(),
  name: profileTypeEnum("profile_type").unique().notNull(),
})