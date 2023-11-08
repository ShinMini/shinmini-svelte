<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import "../app.css";
	import './styles.css';
	import '$lib/fonts/fonts.css';
	
	import '../i18n';
	import {locale, isLoading} from 'svelte-i18n';

	locale.set('ko')
	locale.subscribe(() => console.log('locale change'))
</script>

{#if $isLoading}
<div class="w-full h-full bg-zinc-800 justify-center align-center">
	<h1 class="text-4xl font-bold text-center text-title-cool w-full h-full m-auto">Please wait...</h1>
</div>
{:else}

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
{/if}


<style>
	.app {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		background-color: #222222;
	}

	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		height: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
