/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_PZ3WRm9AIKpT@ep-gentle-paper-a4fxbisp-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
    }
};