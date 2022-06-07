<script lang="ts">
	import { derived } from 'svelte/store';
	import { type IndexPage, query, graphql } from '$houdini';

	const { data } = query<IndexPage>(graphql`
		query IndexPage {
			lists {
				id
			}
		}
	`);

	const lists = derived(data, (data) => data?.lists ?? []);
</script>

<h1>Welcome to SvelteKit</h1>

<ul>
	{#each $lists as list}
		<li><a href={`/${list.id}`}>List {list.id}</a></li>
	{/each}
</ul>
