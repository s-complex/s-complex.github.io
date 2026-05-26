<script lang="ts">
	import { page } from '$app/state';
	const nav = [
		{ name: 'Index', link: '/' },
		{ name: 'Projects', link: '/projects' },
		{ name: 'About', link: '/about' }
	];
</script>

<header
	class="shadow-md flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 dark:from-blue-500/50 to-cyan-100 dark:to-cyan-500/50 z-10"
>
	<div class="p-4 flex flex-col md:flex-row gap-4 items-center">
		<img
			class="rounded-full shadow"
			decoding="async"
			fetchpriority="high"
			loading="eager"
			width="64"
			height="64"
			alt="Sliver Complex logo"
			src="https://library.gxres.net/images/icons/big-favicon.webp"
		/>
		<h1>Sliver Complex</h1>
	</div>
	<nav class="max-w-full flex flex-row overflow-x-auto">
		{#each nav as { name, link } (name)}
			<a class="p-2 text-inherit hover:bg-white/50 dark:hover:bg-dark/50 { link == page.url.pathname ? 'bg-white/50 dark:bg-dark/50' : ''}" href={link}>{name}</a>
		{/each}
	</nav>
</header>
