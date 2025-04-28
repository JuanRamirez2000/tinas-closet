import { drizzle } from "drizzle-orm/postgres-js";
import { config } from "dotenv";
import postgres from "postgres";

config({ path: ".env" }); // or .env.local

const CONNECTION_STRING = process.env.DATABASE_URL!;

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(CONNECTION_STRING, { prepare: false });
export const db = drizzle(client);
