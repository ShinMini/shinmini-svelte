<svelte:head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>nextTickQueue &amp; microTaskQueue</title>
</svelte:head>
<body>
	<article class="page sans">
		<header>
			<div class="page-header-icon undefined"><span class="icon">⚙️</span></div>
			<h1 class="page-title">nextTickQueue &amp; microTaskQueue</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<p class="">nextTickQueue and microTaskQueue.</p>
			<p class="">
				It explains that nextTickQueue is responsible for holding callbacks invoked by the process.nextTick() API, while microTaskQueue is
				for holding callbacks from resolved promises. The author notes that these two queues are not part of the event loop developed inside
				the libUV library but are a part of Node.js itself. The article highlights that these queues are called as soon as possible when the
				boundary between C/C++ and JavaScript is crossed, which means they execute immediately after the currently running operation.
			</p>
			<p class="" />
			<p class="">
				a succinct overview of nextTickQueue and microTaskQueue in Node.js, explaining their roles in holding callbacks and their
				relationship to the event loop. The key takeaway is that these two queues are called immediately after the currently running
				operation, ensuring high-priority execution.
			</p>
		</div>
	</article>
</body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
