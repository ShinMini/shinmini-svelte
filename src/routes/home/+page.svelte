<script>
	import avatar from '$lib/images/Avatar.png';
	import {_} from 'svelte-i18n';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="ShinMini dev homepage home" />
</svelte:head>

<section class="main-section">
		<picture class="profile w-fit mx-auto">
			<img draggable="false" src={avatar} alt="Profile" />
		</picture>

		<article class="flex flex-col justify-center gap-4 sm:gap-6 items-center sm:items-start">
			<div class="flex flex-col gap-1">
				<h1 class="text-title-cool font-title text-4xl">{$_('page.home.article.name', {default: 'HyeonMinShin'})}</h1>
				<h2 class="text-title-sub font-subtitle">{$_('page.home.article.subtitle', {default: 'Full Stack Developer'})}</h2>
			</div>
			<p class="text-slate-200 font-thin w-[300px] text-xs sm:text-base mx-auto sm:w-fit">{@html $_('page.home.article.introduction', {default: 'Hello, my name is HyeonMin Shin.  I am a 24-year-old frontend developer with experience building complex user interfaces, managing state, and optimizing performance using React and React Native with TypeScript.  I live in Uijeongbu, South Korea,'})}</p>
			<div class="flex flex-row gap-2 w-fit">
			  <a class="btn !border-blue-600" href="https://github.com/ShinMini">{$_('page.home.button.github', {default: 'Github'})}</a>
				<a class="btn !border-red-600" href="https://kr.linkedin.com/in/shinmini">{$_('page.home.button.linkedIn', {default: 'LinkedIn'})}</a>
			</div>
		</article>
</section>

<style>
	.main-section {
		display: grid;
		grid-template-columns: 2fr 3fr;
		width: 100%;
		height: 100%;

		align-content: center;

		@media (max-width: 640px) {
			grid-template-columns: 1fr;
			padding-bottom: 2rem;
		}
	}

	.profile img{
		max-width: 380px;
		max-height: 380px;
		width: 90%;
		margin: 0 auto;

		@media (min-width: 720px) {
			min-width: 330px;
		}
	}
</style>
