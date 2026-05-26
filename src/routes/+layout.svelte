<script lang="ts">
	import 'uno.css';
	import '$lib/assets/style.css';
	import Header from 'components/Header.svelte';
</script>

<svelte:head>
	<title>Sliver Complex</title>
	<meta name="description" content="The landing site of Sliver Complex." />
	<link
		rel="icon"
		type="image/webp"
		sizes="64x64"
		href="https://library.gxres.net/images/icons/favicon.ico"
	/>
	<link
		rel="apple-touch-icon"
		type="image/webp"
		sizes="128x128"
		href="https://library.gxres.net/images/icons/big-favicon.webp"
	/>
	<link rel="canonical" href="https://insli.cc" />
</svelte:head>

<div class="max-w-2xl mx-auto flex flex-col min-h-svh">
	<Header />
	<main class="flex-auto w-full">
		<section class="p-4 bg-white dark:bg-slate-800 shadow rounded-b-md">
			<slot />
		</section>
	</main>
	<footer>
		<p class="text-center text-sm p-3">
			© 2022 - {new Date().getFullYear()} <a href="/">Sliver Complex</a>. Powered by
			<a href="https://svelte.dev" target="_blank" rel="noopener noreferer">SvelteKit</a>.
		</p>
	</footer>
</div>

<style>
</style>
