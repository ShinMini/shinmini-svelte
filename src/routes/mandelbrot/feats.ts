export type MandelbrotProps = {
	canvas: HTMLCanvasElement;
	offset: { x: number; y: number };
	scale: number;
	maxIterations: number;
};

export function mandelbrot({ canvas, offset, scale, maxIterations }: MandelbrotProps) {
	const ctx = canvas.getContext('2d');
	if (!ctx) throw new Error('fail to import context from canvas.');

	try {
		const width = canvas.width;
		const height = canvas.height;
		const minX = offset.x - 1 / scale;
		const maxX = offset.x + 1 / scale;
		const minY = offset.y - ((maxX - minX) * (height / width)) / 2;
		const maxY = offset.y + ((maxX - minX) * (height / width)) / 2;
		const dx = (maxX - minX) / width;
		const dy = (maxY - minY) / height;

		const color = [];
		color[0] = 'black';

		let L = 255;
		const DL = 255 / maxIterations;

		for (let i = maxIterations; i > 0; i--) {
			color[i] = `rgb(255, ${Math.floor(L)}, 255)`;
			L -= DL;
		}

		for (let x = 0; x < width; x++) {
			const cx = minX + x * dx;
			for (let y = 0; y < height; y++) {
				const cy = minY + y * dy;
				let zx = cx;
				let zy = cy;

				let zx2 = zx * zx;
				let zy2 = zy * zy;

				let count = maxIterations;
				for (count; zx2 + zy2 <= 4 && count; count--) {
					zy = 2 * zx * zy + cy;
					zx = zx2 - zy2 + cx;
					zx2 = zx * zx;
					zy2 = zy * zy;
				}
				ctx.fillStyle = color[count];
				ctx.fillRect(x, y, 1, 1);
			}
		}
	} catch (e) {
		console.error(e);
	}
}
