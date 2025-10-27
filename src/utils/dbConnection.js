import pg from "pg";
dbConnStr = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnStr });
