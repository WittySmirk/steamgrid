import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	DATABASE_NAME: { description: 'The database name' },
	DATABASE_USER: {description: 'Database user login'},
	DATABASE_PASSWORD: {description: 'Password for the database user'},
	DATABASE_HOST: {description: 'Mines database host'},
	DATABASE_PORT: {description: 'Mines database port'},
});
