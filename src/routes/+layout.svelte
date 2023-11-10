<script>
	import { scale, slide } from 'svelte/transition';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import '../app.css';
	import './styles.css';
	import '$lib/fonts/fonts.css';

	import '../i18n';
	import { locale, isLoading } from 'svelte-i18n';
	import { quintOut } from 'svelte/easing';
	import Loading from './Loading.svelte';

	locale.set('ko');
	// locale.subscribe(() => console.log('locale change'));
</script>

{#if $isLoading}
	<Loading />
{:else}
	<div
		transition:scale={{
			duration: 300,
			delay: 500,
			opacity: 0.5,
			start: 0.5,
			easing: quintOut
		}}
		class="app"
	>
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
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		max-width: 64rem;
		margin: 0 auto;
	}
</style>
