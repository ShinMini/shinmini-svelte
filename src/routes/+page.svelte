<script>
	import Counter from './Counter.svelte';
	import avatar from '$lib/images/Avatar.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
		<picture class="profile">
			<img src={avatar} alt="Profile" />
		</picture>

		<article class="text-area">
			<h1>HyeonMin Shin</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione iure nisi ut magni ullam, eum ad quod! Dolores eligendi nobis ea adipisci, saepe, repudiandae voluptate voluptatem repellendus doloremque, quia vero.</p>
		</article>
</section>

<style>
	section {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		@media screen and (max-width: 640px) {
			flex-direction: column;
		}
	}

	.profile {
		flex: 0.4;
	}
	.profile img {
		max-width: 528px;
		max-height: 528px;
		width: 100%;
	}

	.text-area {
		flex: 0.6;
		display: flex;
		flex-direction: column;

		font-family: Poppins;
		font-style: normal;
		line-height: 35px; /* 50% */
	}

	.text-area h1 {
		text-align: start;
		margin: 0;
		padding: 0;
		font-size: clamp(2rem, 4vw, 3rem);
		color: var(--subtitle-cool);
		font-weight: bold;
	}

</style>
