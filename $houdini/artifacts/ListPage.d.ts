export type ListPage = {
	readonly input: ListPage$input;
	readonly result: ListPage$result | undefined;
};

export type ListPage$result = {
	readonly list: {
		readonly id: string;
		readonly items: {
			readonly id: string;
			readonly message: string;
		}[];
	} | null;
};

export type ListPage$afterLoad = {
	readonly input: {
		readonly ListPage: ListPage$input;
	};
	readonly data: {
		readonly ListPage: ListPage$result;
	};
};

export type ListPage$input = {
	listID: string;
};
