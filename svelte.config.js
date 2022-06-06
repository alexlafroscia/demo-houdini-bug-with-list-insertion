import { resolve } from 'node:path';
import { searchForWorkspaceRoot } from 'vite';
import adapter from '@sveltejs/adapter-auto';
import houdini from 'houdini/preprocess';
import preprocess from 'svelte-preprocess';

const HOUDINI_OUTPUT_DIR = resolve('.', '$houdini');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [houdini(), preprocess()],

	kit: {
		adapter: adapter(),

		alias: {
			$houdini: HOUDINI_OUTPUT_DIR
		},

		vite: {
			server: {
				fs: {
					allow: [
						// Default behavior
						searchForWorkspaceRoot(process.cwd()),

						// Add `$houdini` directory
						HOUDINI_OUTPUT_DIR
					]
				}
			}
		}
	}
};

export default config;
