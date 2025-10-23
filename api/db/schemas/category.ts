import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { transactionTable } from "./transaction";
import { relations } from "drizzle-orm";

export const categoryType = ["fix", "variable"] as const;
export const categoryTypeEnum = pgEnum("categoryTypeEnum", categoryType);
export type CategoryTable = (typeof categoryType)[number];

export const categoryTable = pgTable("Category", {
  id: uuid().defaultRandom().notNull(),
  name: varchar().notNull(),
  type: categoryTypeEnum().notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp()
    .defaultNow()
    .$defaultFn(() => new Date()),
 
});

export const categoryRelations = relations(categoryTable, ({ many }) => ({
  transactions: many(transactionTable)
}));
