import { pgEnum, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/// Helpers
export const defaultColumns = {
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
  deletedAt: timestamp("deleted_at"),
} as const;

/// Tables

export const personLinkType = pgEnum("person_link_type", [
  "influenced_by",
]);

export const person = pgTable("person", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  alias: text("alias"),
  city: text("city"),
  crew: text("crew"),
  biography: text("biography"),
  image: text("image"),
  ...defaultColumns,
});

export const personLink = pgTable("person_link", {
  id: uuid("id").primaryKey().defaultRandom(),
  personId: uuid("person_id")
    .notNull()
    .references(() => person.id, { onDelete: "cascade" }),
  type: personLinkType("type").default("influenced_by").notNull(),
  ...defaultColumns,
});
