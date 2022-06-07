export default {
	name: 'AddItemToList',
	kind: 'HoudiniMutation',
	hash: 'a960721d52af047f492e546e9205a2f51d772a1a7255c34ba46e0ce00edd75cc',

	raw: `mutation AddItemToList($listID: ID!, $message: String!) {
  addItem(listID: $listID, message: $message) {
    ...ListItems_insert
    id
  }
}

fragment ListItems_insert on Item {
  id
  message
}
`,

	rootType: 'Mutation',

	selection: {
		addItem: {
			type: 'Item',
			keyRaw: 'addItem(listID: $listID, message: $message)',

			operations: [
				{
					action: 'insert',
					list: 'ListItems',
					position: 'last'
				}
			],

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
	},

	input: {
		fields: {
			listID: 'ID',
			message: 'String'
		},

		types: {}
	}
};
