import {
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
  } from "drizzle-orm/pg-core";
  import { drizzle } from "drizzle-orm/vercel-postgres";
export const todoTable = pgTable("Todos",{
    id: serial("id").primaryKey(),
    task: text("Task").notNull(),
})