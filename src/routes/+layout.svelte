<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '$lib/fonts/fonts.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer >
		<div >
			<p>GitHub</p>
			<p>Instagram</p>
			<p>Youtube</p>
		</div>
		<p>© 2023 made by ShinMini, in Korea</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
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

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: content-box;
		padding: clamp(12px, 1.2vw, 24px) clamp(24px, 2.4vw, 48px);

		border-top: 2px solid #333;
		color: rgba(255, 255, 255, 0.80);

		font-family: Poppins;
		font-size: clamp(8px, 1.2vw, 16px);
		font-style: normal;
		font-weight: 400;
		line-height: 35px; /* 218.75% */
	}

	footer div {
		display: flex;
		gap: 6px;
		font-weight: bold;

		color: rgba(255, 255, 255, 0.50);
	}
</style>
