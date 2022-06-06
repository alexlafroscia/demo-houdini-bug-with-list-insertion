export default {
	name: 'IndexPage',
	kind: 'HoudiniQuery',
	hash: '7b36767e89ea6b232e185fccd55689dc9b2c32f19bd8eb7de5491dbc8cac37c0',

	raw: `query IndexPage {
  ok
}
`,

	rootType: 'Query',

	selection: {
		ok: {
			type: 'Boolean',
			keyRaw: 'ok'
		}
	},

	policy: 'NetworkOnly',
	partial: false
};
