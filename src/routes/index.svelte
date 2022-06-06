<script lang="ts">
	import { type IndexPage, query, graphql } from '$houdini';

	const { data } = query<IndexPage>(graphql`
		query IndexPage {
			ok
		}
	`);
</script>

<h1>Welcome to SvelteKit</h1>

{#if $data?.ok}
	<p>GraphQL says that things are OK!</p>
{:else}
	<p>Something is wrong with the GraphQL setup</p>
{/if}
