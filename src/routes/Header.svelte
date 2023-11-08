<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/Logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="logo-image">
		<a href="/">
			<img src={logo} alt="dev ShinMini Logo" />
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/mandelbrot' ? 'page' : undefined}>
				<a href="/mandelbrot">Mandelbrot</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
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

		@media screen and (max-width: 490px) {
			display: none;
		}
	}

	.logo-image img {
		width: clamp(1.4rem, 10.5vw, 8rem);
		height: clamp(1.4rem, 100%, 8rem);
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		font-family: Poppins;
		font-weight: 700;
		line-height: 35px; /* 134.615% */
		@media screen and (max-width: 490px) {
			width: 100%;
		}
	}

	ul {
		position: relative;
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
