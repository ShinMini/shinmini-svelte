<script module lang="ts">
	import { mandelbrot } from './feats';
	import type { MandelbrotProps } from './feats';
	import { onMount } from 'svelte';

	let innerWidth = window.innerWidth;

	onMount(() => {
		function onResize() {
			innerWidth = window.innerWidth;
		}
		window.addEventListener('resize', onResize);
		return () =>
			window.removeEventListener('resize', onResize);
	});

	$: canvasWidth = innerWidth * 0.8;

	let scale = 1;
	let offset = {
		x: -0.6,
		y: 0
	};

	let increaseScaleTimer: NodeJS.Timeout | null = null;
	let linearGradient = 300;

	function isEnough() {
		return linearGradient < 50; // if gradient is greater than 100, return true -> continue
	}

	function scaleUp(dx: number = 1) {
		if (increaseScaleTimer) {
			// if timer is running, increase gradient
			if (!isEnough()) {
				clearInterval(increaseScaleTimer);
				return setupTimer(dx);
			}
		} // else, start timer
		return setupTimer(dx);
	}

	function setupTimer(dx: number = 1) {
		increaseScaleTimer = setInterval(() => {
			const gradient = linearGradient < 100 ? 0.5 : 0.1;
			scale += gradient * dx;

			if (increaseScaleTimer && !isEnough()) {
				linearGradient -= 30;
				clearInterval(increaseScaleTimer);
				return setupTimer(dx);
			}
		}, linearGradient);
	}

	function resetTimer() {
		if (increaseScaleTimer) {
			clearInterval(increaseScaleTimer);
			increaseScaleTimer = null;
			return (linearGradient = 300);
		}
		return;
	}

	function increaseScale() {
		scaleUp(1);
	}

	function decreaseScale() {
		scaleUp(-1);
	}

	function drawMandelbrot(event: MouseEvent) {
		const canvas = document.getElementById(
			'canvas'
		) as HTMLCanvasElement;

		offset.x +=
			((2 * event.offsetX) / canvas.width - 1) / scale;
		offset.y +=
			(2 * event.offsetY - canvas.height) /
			scale /
			canvas.width;

		const props = {
			canvas,
			offset,
			scale,
			maxIterations: 50
		} satisfies MandelbrotProps;

		mandelbrot(props);
	}
</script>

<svelte:head>
	<title>Canvas</title>
	<meta name="description" content="Canvas Playground" />
</svelte:head>

<section class="min-w-max min-h-max">
	<h1 class="text-2xl poppins text-slate-200 font-bold">
		Click Me! Width: {innerWidth}
	</h1>
	<canvas
		on:click={drawMandelbrot}
		id="canvas"
		width={canvasWidth}
		height={canvasWidth * 0.5}
	/>
	<div class="box-status text-slate-400">
		<p>Offset: {offset.x}, {offset.y}</p>
		<p>Scale: {Number(scale).toFixed(2)}</p>
	</div>

	<div class="box-container text-slate-400">
		<button
			on:mousedown={increaseScale}
			on:mouseleave={resetTimer}>Scale Up</button
		>
		<button
			on:mousedown={decreaseScale}
			on:mouseleave={resetTimer}>Scale Down</button
		>
		<button on:click={resetTimer}>Reset</button>
	</div>
</section>

<style>
	#canvas {
		border: 1px solid black;
		background-color: aliceblue;
		border-radius: 15px;
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
