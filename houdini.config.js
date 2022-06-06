/** @type {import('houdini').ConfigFile} */
const config = {
	schemaPath: './src/graphql/schema.graphql',
	sourceGlob: 'src/**/*.svelte',
	module: 'esm',
	framework: 'kit'
};

export default config;
