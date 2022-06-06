export type IndexPage = {
	readonly input: null;
	readonly result: IndexPage$result | undefined;
};

export type IndexPage$result = {
	readonly ok: boolean;
};

export type IndexPage$afterLoad = {
	readonly data: {
		readonly IndexPage: IndexPage$result;
	};
};
