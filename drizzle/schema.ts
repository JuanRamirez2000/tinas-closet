import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  date,
  primaryKey,
} from "drizzle-orm/pg-core";

//* Base Tables
export const clothesTable = pgTable("clothes_table", {
  id: serial("id").primaryKey(),
  description: text().notNull(),
  photoURL: text(),
  dateAdded: date({ mode: "date" }),
});

export const colorsTable = pgTable("colors_table", {
  id: serial("id").primaryKey(),
  colorName: text().notNull(),
});

export const stylesTable = pgTable("styles_table", {
  id: serial("id").primaryKey(),
  styleName: text().notNull(),
});

//* Relationships
export const clothesRelations = relations(clothesTable, ({ many }) => ({
  clothesToColors: many(clothesToColors),
}));

export const stylesRelations = relations(stylesTable, ({ many }) => ({
  clothesToStyles: many(clothesToStyles),
}));

//* Junction Tables
export const clothesToColors = pgTable(
  "clothesToColors",
  {
    clothesId: integer("clothes_id")
      .notNull()
      .references(() => clothesTable.id),
    colorsId: integer("colors_id")
      .notNull()
      .references(() => colorsTable.id),
  },
  (t) => [primaryKey({ columns: [t.colorsId, t.clothesId] })]
);

export const clothesToStyles = pgTable(
  "clothesToStyles",
  {
    clothesId: integer("clothes_id")
      .notNull()
      .references(() => clothesTable.id),
    stylesId: integer("styles_id")
      .notNull()
      .references(() => stylesTable.id),
  },
  (t) => [primaryKey({ columns: [t.stylesId, t.clothesId] })]
);

//* Join Tables
export const clothesToColorsRelations = relations(
  clothesToColors,
  ({ one }) => ({
    colors: one(colorsTable, {
      fields: [clothesToColors.colorsId],
      references: [colorsTable.id],
    }),
    clothes: one(clothesTable, {
      fields: [clothesToColors.clothesId],
      references: [clothesTable.id],
    }),
  })
);

export const clothesToStylesRelations = relations(
  clothesToStyles,
  ({ one }) => ({
    styles: one(stylesTable, {
      fields: [clothesToStyles.stylesId],
      references: [stylesTable.id],
    }),
    clothes: one(clothesTable, {
      fields: [clothesToStyles.clothesId],
      references: [clothesTable.id],
    }),
  })
);

export type InsertUser = typeof clothesTable.$inferInsert;
export type SelectUser = typeof clothesTable.$inferSelect;
