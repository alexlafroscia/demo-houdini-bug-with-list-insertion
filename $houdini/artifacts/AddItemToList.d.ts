export type AddItemToList = {
	readonly input: AddItemToList$input;
	readonly result: AddItemToList$result | undefined;
};

export type AddItemToList$result = {
	readonly addItem: {
		readonly $fragments: {
			ListItems_insert: true;
		};
	};
};

export type AddItemToList$input = {
	listID: string;
	message: string;
};
