<svelte:head>
	<title>Canvas</title>
	<meta name="description" content="Canvas Playground" />
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';

	import { mandelbrot } from './feats';
	import type {MandelbrotProps} from './feats';


	let scale = 1;
	let offset = {
			x:-0.6, 
		y: 0,
	}

	function increaseScale() {
		scale += 0.1;
	}

	function decreaseScale() {
		scale -= 0.1;
	}

	function drawMandelbrot(event: MouseEvent) {
		const canvas = document.getElementById('canvas') as HTMLCanvasElement;

		offset.x += (2 * event.offsetX / canvas.width - 1) / scale;
		offset.y += (2 * event.offsetY - canvas.height) / scale / canvas.width;


		const props = {
			canvas,
			offset,
			scale,
			maxIterations: 50
		}satisfies MandelbrotProps;

		console.log(props)

		mandelbrot(props);
	}

</script>

<div class="text-column">
	<h1>About Mandelbrot</h1>
	<canvas on:click={drawMandelbrot} id="canvas" width="800" height="640"/>
	<div class="box-status">
		<p>Offset: {offset.x}, {offset.y}</p>
		<p>Scale: {scale}</p>
	</div>

	<div class="box-container">
		<button on:click={increaseScale}>+</button>
		<button on:click={decreaseScale}>-</button>
	</div>

</div>

<style>
	#canvas {
		border: 1px solid black;
	}

	.box-status {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.box-container {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

</style>