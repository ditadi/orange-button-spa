
import { serial, text, pgTable, timestamp, boolean } from 'drizzle-orm/pg-core';

export const buttonStatesTable = pgTable('button_states', {
  id: serial('id').primaryKey(),
  label: text('label').notNull(),
  clicked: boolean('clicked').notNull().default(false),
  color: text('color').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type ButtonState = typeof buttonStatesTable.$inferSelect;
export type NewButtonState = typeof buttonStatesTable.$inferInsert;

// Export all tables for proper query building
export const tables = { buttonStates: buttonStatesTable };
