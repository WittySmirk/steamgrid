import { defineConfig } from 'drizzle-kit';
import { loadEnv } from 'vite';

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_NAME, DATABASE_PORT } = loadEnv('development', process.cwd(), 'DATABASE_');

if (!DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_HOST || !DATABASE_NAME || !DATABASE_PORT) throw new Error('DATABASE credentials not set properly');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'postgresql',
	dbCredentials: { host: DATABASE_HOST, user: DATABASE_USER, password: DATABASE_PASSWORD, database: DATABASE_NAME, port: Number(DATABASE_PORT)},
	verbose: true,
	strict: true
});
