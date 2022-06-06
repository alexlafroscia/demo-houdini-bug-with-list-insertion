import { parse, resolve } from 'node:path';
import { makeSchema } from 'nexus';

const { dir: DIRNAME } = parse(new URL(import.meta.url).pathname);

const types = Object.values(import.meta.globEager('./types/*.ts'))
	.map((module) => Object.values(module))
	.flat();

export const schema = makeSchema({
	types,
	outputs: {
		typegen: resolve(DIRNAME, './nexus-typegen.d.ts'),
		schema: resolve(DIRNAME, './schema.graphql')
	}
});
