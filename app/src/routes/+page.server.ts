import { db } from "#lib/server/db/index.ts";
import { test } from "#lib/server/db/schema.ts";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		post: await db.select().from(test)
	};
};
