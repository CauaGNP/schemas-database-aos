CREATE TYPE "public"."monthlyBudgetEnum" AS ENUM('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');--> statement-breakpoint
ALTER TABLE "Account" DROP CONSTRAINT "Account_user_id_User_id_fk";
--> statement-breakpoint
ALTER TABLE "Financial_Goal" DROP CONSTRAINT "Financial_Goal_user_id_User_id_fk";
--> statement-breakpoint
ALTER TABLE "MonthlyBudget" DROP CONSTRAINT "MonthlyBudget_user_id_User_id_fk";
--> statement-breakpoint
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_account_id_Account_id_fk";
--> statement-breakpoint
ALTER TABLE "MonthlyBudget" ALTER COLUMN "month" SET DATA TYPE "public"."monthlyBudgetEnum" USING "month"::"public"."monthlyBudgetEnum";--> statement-breakpoint
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Financial_Goal" ADD CONSTRAINT "Financial_Goal_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "MonthlyBudget" ADD CONSTRAINT "MonthlyBudget_user_id_User_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_account_id_Account_id_fk" FOREIGN KEY ("account_id") REFERENCES "public"."Account"("id") ON DELETE cascade ON UPDATE no action;