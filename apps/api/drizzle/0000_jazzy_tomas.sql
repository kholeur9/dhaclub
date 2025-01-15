CREATE TYPE "public"."profileTypes" AS ENUM('student', 'jobseeker', 'employer', 'recruiter', 'freeLancer', 'professional', 'agentGovernemental', 'intern', 'businessOwner');--> statement-breakpoint
CREATE TYPE "public"."roles" AS ENUM('admin', 'user', 'moderator', 'super-admin');--> statement-breakpoint
CREATE TABLE "profileType" (
	"id" serial PRIMARY KEY NOT NULL,
	"profile_type" "profileTypes"
);
--> statement-breakpoint
CREATE TABLE "profiles" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"profileTypeId" integer NOT NULL,
	"picture" varchar,
	"phone_number" varchar(255),
	"address" varchar(255),
	"date_of_birth" varchar(255),
	"bio" varchar(255),
	CONSTRAINT "profiles_phone_number_unique" UNIQUE("phone_number")
);
--> statement-breakpoint
CREATE TABLE "roles_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"role" "roles"
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role_id" integer NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_profileTypeId_profileType_id_fk" FOREIGN KEY ("profileTypeId") REFERENCES "public"."profileType"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_role_id_roles_users_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles_users"("id") ON DELETE no action ON UPDATE no action;