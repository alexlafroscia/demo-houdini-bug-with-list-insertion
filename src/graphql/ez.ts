import { CreateApp } from '@graphql-ez/sveltekit';
import { ezGraphiQLIDE } from '@graphql-ez/plugin-graphiql';

import { schema } from './nexus';

export const ezApp = CreateApp({
	// You can use any valid GraphQL Schema
	schema,
	ez: {
		plugins: [
			// EZ Plugins
			ezGraphiQLIDE({})
		]
	},
	envelop: {
		plugins: [
			// Envelop Plugins
		]
	}
	// Other Options
});
