<svelte:head>
	<title>notion</title>
</svelte:head>

<ol>
	<!-- JOB TITLE -->
	<li>
		<h2><a href="docs/notion/IT Job Titles">IT Job Titles</a></h2>
		<ol>
			<li><h4><a href="docs/notion/IT Job Titles/PM">PM</a></h4></li>
			<li><h4><a href="docs/notion/IT Job Titles/DA">DA</a></h4></li>
			<li><h4><a href="docs/notion/IT Job Titles/BrSE">BrSE</a></h4></li>
		</ol>
	</li>

	<!-- C/C++ -->
	<li><h2><a href="docs/notion/pointer&reference">pointer와 reference</a></h2></li>

	<!-- Back End -->
	<li><h2><a href="docs/notion/BE">백엔드(BE)</a></h2></li>
	<li>
		<h4><a class="text-green-700" href="docs/notion/BE/server">Transfer</a></h4>
		<ol>
			<li><a href="docs/notion/BE/server/cookie">Cookie</a></li>
			<li>
				<a href="docs/notion/BE/server/web-hosting-services">Web Hosting Services</a>
			</li>
			<li>
				<a href="docs/notion/BE/server/latency-throughput-bandwidth">Latency &amp; Throughput &amp; Bandwidth</a>
			</li>
		</ol>
	</li>

	<li>
		<h4><a class="text-green-700" href="docs/notion/BE/nodejs">Node js</a></h4>
		<ol>
			<li><a href="docs/notion/BE/nodejs/express">Express</a></li>
			<li><a href="docs/notion/BE/nodejs/express/body-parser">body-parser</a></li>
			<li>
				<a href="docs/notion/BE/nodejs/express/event-loop">Event Loop in Node js</a>
			</li>
			<li><a href="docs/notion/BE/nodejs/express/libUV">libUV library</a></li>
			<li>
				<a href="docs/notion/BE/nodejs/express/next-tick-queue-micro-task-queue">nextTickQueue &amp; microTaskQueue</a>
			</li>
		</ol>
	</li>

	<li>
		<h4><a href="docs/notion/BE/spring">Spring</a></h4>
		<ol>
			<li><a href="docs/notion/BE/spring/Spring Boot">Spring Boot</a></li>
			<li><a href="docs/notion/BE/spring/Spring Cloud">Spring Cloud</a></li>
		</ol>
	</li>

	<li><h4><a href="docs/notion/BE/nestjs">Nest js</a></h4></li>

	<!-- Machine Learning -->
	<li>
		<h2><a href="docs/notion/ML">머신러닝</a></h2>
		<ol>
			<li><a href="docs/notion/ML/Tensorflow">About Tensorflow</a></li>
			<li><a href="docs/notion/ML/ChatGPT">About ChatGPT</a></li>
			<li><a href="docs/notion/ML/ChatGPT/General">General</a></li>
		</ol>
	</li>

	<!-- Front End -->
	<li><h2><a href="docs/notion/FE">프론트엔드(FE)</a></h2></li>
	<li><h4><a href="docs/notion/FE/WindowDocument">WindowDocument</a></h4></li>
	<li><h4><a href="docs/notion/FE/React">React</a></h4></li>
	<li>
		<h4><a href="docs/notion/FE/Redux">Redux</a></h4>
		<ol>
			<li><a href="docs/notion/FE/Redux/#state-type">State Type</a></li>
			<li><a href="docs/notion/FE/Redux/#duck-type">Duck typing</a></li>
			<li><a href="docs/notion/FE/Redux/#serializable-destructible">Serializable destructible</a></li>
		</ol>
	</li>

	<li><h2><a href="/docs/notion/blockchain">블록체인</a></h2></li>
</ol>

<style scoped style="scss">
	h2 {
		color: #2c5282;
	}
	h4 {
		--tw-text-opacity: 1;
		color: rgb(21 128 61 / var(--tw-text-opacity));
		font-weight: 550;
	}

	ol {
		margin: 0;
	}

	li {
		&:first-child {
			padding-top: 0.2rem;
		}
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 0.8;

		padding: 0;
		margin: 0;
		list-style-type: none;
		color: #666;
	}

	ol > li > ol > li {
		text-decoration: none;
		/* list-style:armenian; */
		list-style: georgian;
		color: #555;
		margin-left: 0.5rem;
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
	}
</style>
