<script lang="ts">
	import { mandelbrot } from './feats';
	import type { MandelbrotProps } from './feats';

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
		const canvas = document.getElementById('canvas') as HTMLCanvasElement;

		offset.x += ((2 * event.offsetX) / canvas.width - 1) / scale;
		offset.y += (2 * event.offsetY - canvas.height) / scale / canvas.width;

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

<div class="text-column">
	<h1>About Mandelbrot</h1>
	<canvas on:click={drawMandelbrot} id="canvas" width="800" height="640" />
	<div class="box-status">
		<p>Offset: {offset.x}, {offset.y}</p>
		<p>Scale: {Number(scale).toFixed(2)}</p>
	</div>

	<div class="box-container">
		<button on:mousedown={increaseScale} on:mouseleave={resetTimer}>Scale Up</button>
		<button on:mousedown={decreaseScale} on:mouseleave={resetTimer}>Scale Down</button>
		<button on:click={resetTimer}>Reset</button>
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
