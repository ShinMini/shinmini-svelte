<script>
	import ReduxType from './ReduxType.svelte';
	import DuckType from './DuckType.svelte';
	import SerializableDestructible from './SerializableDestructible.svelte';
</script>

<svelte:head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Redux</title>
</svelte:head>

<body>
	<article class="page sans">
		<header>
			<div class="page-header-icon undefined">
				<img
					class="icon"
					alt="icon"
					src="data:image/png;base64,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" />
			</div>
			<h1 class="page-title">Redux</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<p class="" />
			<h1 class="">About Redux on Javascript</h1>
			<ul class="bulleted-list"><li style="list-style-type:disc">Introduction to Redux</li></ul>
			<ul class="bulleted-list">
				<li style="list-style-type:disc">
					Core Concepts of Redux
					<ul class="bulleted-list"><li style="list-style-type:circle">Store</li></ul>
					<ul class="bulleted-list"><li style="list-style-type:circle">Actions</li></ul>
					<ul class="bulleted-list"><li style="list-style-type:circle">Reducers</li></ul>
				</li>
			</ul>
			<ul class="bulleted-list">
				<li style="list-style-type:disc">Benefits of using Redux</li>
			</ul>
			<ul class="bulleted-list">
				<li style="list-style-type:disc">Implementing Redux in a Javascript Application</li>
			</ul>
			<ul class="bulleted-list"><li style="list-style-type:disc">Redux vs Flux</li></ul>
			<ul class="bulleted-list"><li style="list-style-type:disc">Redux Middleware</li></ul>
			<ul class="bulleted-list">
				<li style="list-style-type:disc">Best Practices for using Redux</li>
			</ul>
			<figure class="link-to-page" id="redux-type">
				<ReduxType />
			</figure>
			<figure id="serializable-destructible" class="link-to-page">
				<SerializableDestructible />
			</figure>
			<figure id="duck-type" class="block-color-yellow_background link-to-page">
				<DuckType />
			</figure>
		</div>
	</article>
</body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
