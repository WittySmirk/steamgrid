import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_NAME, DATABASE_PORT} from '$app/env/private';
import {sql} from 'drizzle-orm';

if (!DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_HOST || !DATABASE_NAME || !DATABASE_PORT) throw new Error('DATABASE credentials not set properly');

const client = postgres({host: DATABASE_HOST, database: DATABASE_NAME, username: DATABASE_USER, password: DATABASE_PASSWORD, port: Number(DATABASE_PORT)});

export const db = drizzle(client, { schema });

await db.execute(sql`SET search_path TO group11;`).catch((e) => {
    console.log(e)
})

await db.execute(sql`SET role group11;`).catch((e) => {
    console.log(e)
})