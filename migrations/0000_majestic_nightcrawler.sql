CREATE TABLE "clothes_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text NOT NULL,
	"colorTags" integer,
	"styleTags" text,
	"photoURL" text,
	"dateAdded" date
);
