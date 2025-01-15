ALTER TABLE "profileType" ALTER COLUMN "profile_type" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "roles_users" ALTER COLUMN "role" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "profileType" ADD CONSTRAINT "profileType_profile_type_unique" UNIQUE("profile_type");--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_id_unique" UNIQUE("user_id");--> statement-breakpoint
ALTER TABLE "roles_users" ADD CONSTRAINT "roles_users_role_unique" UNIQUE("role");