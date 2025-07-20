import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

/// Helpers
export const defaultColumns = {
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
  deletedAt: timestamp("deleted_at"),
} as const;

/// Tables
export const incidentStatus = pgEnum("incident_status", ["draft", "closed"]);

export const incident = pgTable("incident", {
  id: uuid("id").primaryKey().defaultRandom(),
  status: incidentStatus("status").default("draft"),
  ...defaultColumns,
});