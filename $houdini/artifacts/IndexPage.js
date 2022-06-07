export default {
	name: 'IndexPage',
	kind: 'HoudiniQuery',
	hash: '3c9c9852f45156a7099af22349e64b1a4e521b7c65910065947731d04332e76f',

	raw: `query IndexPage {
  lists {
    id
  }
}
`,

	rootType: 'Query',

	selection: {
		lists: {
			type: 'List',
			keyRaw: 'lists',

			fields: {
				id: {
					type: 'ID',
					keyRaw: 'id'
				}
			}
		}
	},

	policy: 'NetworkOnly',
	partial: false
};
