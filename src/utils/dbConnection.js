import pg from "pg";
let dbConnStr = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnStr });
console.log(dbConnStr);
