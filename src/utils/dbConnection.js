import pg from "pg";
dbConnStr = "";
export const db = new pg.Pool({ connectionString: dbConnStr });
