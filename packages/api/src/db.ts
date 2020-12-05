import { Pool } from "pg"

const connectionString =
  process.env.DATABASE_URL || "postgresql://dhln:pass@localhost:5432/db"
const pool = new Pool({ connectionString })

export default pool;
