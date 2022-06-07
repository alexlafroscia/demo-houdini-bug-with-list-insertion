export default {
	name: 'ListPage',
	kind: 'HoudiniQuery',
	hash: 'b67264cf3d38719fb6760fccdff6706e338c81ae109d5e6e6507b16e0167daa9',

	raw: `query ListPage($listID: ID!) {
  list(id: $listID) {
    id
    items {
      id
      message
    }
  }
}
`,

	rootType: 'Query',

	selection: {
		list: {
			type: 'List',
			keyRaw: 'list(id: $listID)',
			nullable: true,

			fields: {
				id: {
					type: 'ID',
					keyRaw: 'id'
				},

				items: {
					type: 'Item',
					keyRaw: 'items',

					list: {
						name: 'ListItems',
						connection: false,
						type: 'Item'
					},

					fields: {
						id: {
							type: 'ID',
							keyRaw: 'id'
						},

						message: {
							type: 'String',
							keyRaw: 'message'
						}
					}
				}
			}
		}
	},

	input: {
		fields: {
			listID: 'ID'
		},

		types: {}
	},

	policy: 'NetworkOnly',
	partial: false
};
