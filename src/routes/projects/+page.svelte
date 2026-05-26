<script lang="ts">
	import { onMount } from 'svelte';

	interface Repo {
		name: string;
		html_url: string;
		description: string;
	}

	let repos: Repo[] = [];
	let isLoading = true;

	onMount(async () => {
		const response = await fetch('https://api.sirvr.win/org-projects');
		const data: Repo[] = await response.json();
		repos = data.map((repo) => ({
			name: repo.name,
			html_url: repo.html_url,
			description: repo.description
		}));
		isLoading = false;
	});
</script>

<h2>Projects</h2>
<p>List of projects that are visible to everyone in our GitHub organization.</p>

{#if isLoading}
	<p>Loading....</p>
{:else}
	<div class="grid grid-cols-1 gap-4">
		{#each repos as repo (repo.name)}
			<div class="border p-4 rounded-md">
				<a
					class="font-medium hover:underline"
					href={repo.html_url}
					target="_blank"
					rel="noopener noreferrer">{repo.name}</a
				>
				<p class="mb-0 mt-4 text-sm text-wrap">{repo.description}</p>
			</div>
		{/each}
	</div>
{/if}
