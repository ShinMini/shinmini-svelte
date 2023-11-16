<script lang="ts">
  import { blur } from 'svelte/transition';

  const gradientBlock = 'flex w-screen h-screen bg-zinc-800 justify-center align-center overflow-clip m-0 p-0'
  const gradientText = 'font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center m-auto';
</script>

<div transition:blur={{opacity: 0.6, duration: 600}} class={gradientBlock}>
	<h1 class={gradientText}>Loading ... </h1>
</div>