<script lang="ts" context="module">
	import type { Page } from '@sveltejs/kit';

	export function ListPageVariables(page: Page) {
		return {
			listID: page.params.listID
		};
	}
</script>

<script lang="ts">
	import { derived, get } from 'svelte/store';
	import { type ListPage, type AddItemToList, graphql, query, mutation } from '$houdini';

	/* === Loading List Information === */

	const { data } = query<ListPage>(graphql`
		query ListPage($listID: ID!) {
			list(id: $listID) {
				id

				items @list(name: "ListItems") {
					id
					message
				}
			}
		}
	`);

	const list = derived(data, (data) => data?.list ?? { id: 'xxx', items: [] });

	/* === Adding Items === */

	let newItemMessage: string = '';

	const addItemMutation = mutation<AddItemToList>(graphql`
		mutation AddItemToList($listID: ID!, $message: String!) {
			addItem(listID: $listID, message: $message) {
				...ListItems_insert
			}
		}
	`);

	async function addItem(event: Event) {
		event.preventDefault();

		await addItemMutation({
			listID: get(list).id,
			message: newItemMessage
		});

		newItemMessage = '';
	}
</script>

<header>
	<a href="/" data-test-all-lists>All Lists</a>
</header>

<h1>List {$list.id}</h1>

<form on:submit={addItem}>
	<input data-test-new-item bind:value={newItemMessage} placeholder="Item Text" />

	<button data-test-submit-item>Add</button>
</form>

<ul>
	{#each $list.items as item}
		<li data-test-item={item.id}>{item.message}</li>
	{:else}
		<li><i>No items in this list</i></li>
	{/each}
</ul>
