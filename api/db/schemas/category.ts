import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const categoryType = ["fix", "variable"] as const;
export const categoryTypeEnum = pgEnum("categoryTypeEnum", categoryType);
export type CategoryTable = (typeof categoryType)[number];

export const categoryTable = pgTable("category", {
  id: uuid().defaultRandom().notNull(),
  name: varchar().notNull(),
  type: categoryTypeEnum("type").notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp()
    .defaultNow()
    .$defaultFn(() => new Date()),
  // transaction_id: uuid().notNull().references(() => TransactionTable.id)
});

// export const categoryRelations = relations(categoryTable, ({ one }) => ({
//   transaction: one(transactionTable, {
//     fields: [categoryTable.transaction_id],
//     references: [transactionTable.id],
//   }),
// }));
