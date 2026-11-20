import { pgTable, serial, integer, text } from 'drizzle-orm/pg-core';

export const test = pgTable('test', {
	hello: text()
});
