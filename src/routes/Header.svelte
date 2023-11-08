<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/Logo.svg';
	import { _ ,locale, locales } from 'svelte-i18n'

</script>

<header>
	<div class="logo-image">
		<a href="/">
			<img src={logo} alt="dev ShinMini Logo" />
		</a>
	</div>

	<nav>
		<select bind:value={$locale} class="bg-transparent w-fit text-gray-600 font-normal text-sm">
			{#each $locales as locale}
				<option class="text-right" value={locale}>{locale}</option>
			{/each}
		</select>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">{$_('page.home.nav', { default: 'Home' })}</a>
			</li>
			<li aria-current={$page.url.pathname === '/docs' ? 'page' : undefined}>
				<a href="/docs">{$_('page.docs.nav', {default: 'Docs'})}</a>
			</li>
			<li aria-current={$page.url.pathname === '/mandelbrot' ? 'page' : undefined}>
				<a href="/mandelbrot">{$_('page.lab.nav', {default: 'Lab'})}</a>
			</li>
		</ul>

	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0.5rem 1rem;
		/* padding: clamp(12px, 1.2vw, 24px) clamp(24px, 2.4vw, 48px); */
		height: clamp(48px, 4.8vw, 72px);

		border-bottom: 2px solid #333;
	}

	.logo-image a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;

	}

	.logo-image img {
		width: clamp(1.4rem, 10.5vw, 8rem);
		height: clamp(1.4rem, 100%, 8rem);
		object-fit: contain;

		@media (max-width: 690px) {
			width: 80%;
		}
	}

	nav {
		display: flex;
		justify-content: center;
		gap: 8px;
		font-family: Poppins;
		@media screen and (max-width: 490px) {
			width: 100%;
		}
	}

	ul {
		position: relative;
		font-weight: 700;
		line-height: 35px; /* 134.615% */
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		gap: clamp(12px, 2.5vw, 24px);
	}

	li[aria-current='page'] a {
		color: var(--green-title);
	}

	nav a {
		color: var(--gray-text);
		font-family: Poppins;
		font-style: normal;
		font-weight: 700;
		line-height: 35px; /* 134.615% */
		font-size: clamp(12px, 1.2vw, 24px);
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
