
import { pgTable, serial, text } from 'drizzle-orm/pg-core';

// Minimal table that won't be used
export const dummyTable = pgTable('dummy', {
  id: serial('id').primaryKey(),
  placeholder: text('placeholder'),
});

export type Dummy = typeof dummyTable.$inferSelect;
export type NewDummy = typeof dummyTable.$inferInsert;

export const tables = { dummy: dummyTable };
