import { randomUUID } from 'node:crypto';
import {
	queryField,
	objectType,
	list as graphqlList,
	nonNull,
	idArg,
	mutationField,
	stringArg
} from 'nexus';

type ID = string;

interface ItemAttrs {
	id: ID;
	message: string;
}

interface ListAttrs {
	items: ItemAttrs[];
}

const LISTS = new Map<ID, ListAttrs>();

// Seed some initial data
LISTS.set('List1', { items: [] });
LISTS.set('List2', { items: [] });

export const Item = objectType({
	name: 'Item',
	definition(t) {
		t.nonNull.id('id');

		t.nonNull.string('message');
	}
});

export const List = objectType({
	name: 'List',
	definition(t) {
		t.nonNull.id('id');

		t.nonNull.field('items', {
			type: nonNull(graphqlList(nonNull(Item)))
		});
	}
});

export const lists = queryField('lists', {
	type: nonNull(graphqlList(nonNull(List))),
	resolve() {
		return [...LISTS.entries()].map(([id, list]) => {
			return {
				id,
				...list
			};
		});
	}
});

export const list = queryField('list', {
	type: List,
	args: {
		id: nonNull(idArg())
	},
	resolve(_root, { id }) {
		const list = LISTS.get(id);

		if (list) {
			return { id, ...list };
		}

		return null;
	}
});

export const addItem = mutationField('addItem', {
	type: nonNull(Item),
	args: {
		listID: nonNull(idArg()),
		message: nonNull(stringArg())
	},
	resolve(_root, { listID, message }) {
		const list = LISTS.get(listID);

		if (!list) {
			throw new Error(`List ${listID} does not exist`);
		}

		const item = {
			id: randomUUID(),
			message
		};

		list.items.push(item);

		return item;
	}
});
