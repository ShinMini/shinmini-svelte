<script>
	const code1 = `// Import required modules
const fs = require(&#x27;fs&#x27;);

// Timer phase example: setTimeout
setTimeout(() =&gt; {
  console.log(&#x27;Timeout executed (Timers phase)&#x27;);
}, 100);

// I/O phase example: readFile
fs.readFile(&#x27;./example.txt&#x27;, &#x27;utf-8&#x27;, (err, data) =&gt; {
  if (err) {
    console.error(&#x27;Error reading file:&#x27;, err);
  } else {
    console.log(&#x27;File read (I/O phase)&#x27;);
    // setImmediate example (Check phase)
    setImmediate(() =&gt; {
      console.log(&#x27;Immediate executed (Check phase)&#x27;);
    });

    // process.nextTick example (microtask inside I/O callbacks)
    process.nextTick(() =&gt; {
      console.log(&#x27;nextTick executed (microtask inside I/O callbacks)&#x27;);
    });
  }
});

// process.nextTick (executed after the current operation)
process.nextTick(() =&gt; {
  console.log(&#x27;nextTick executed (after current operation)&#x27;);
});

// setImmediate (Check phase)
setImmediate(() =&gt; {
  console.log(&#x27;Immediate executed (Check phase)&#x27;);
});

console.log(&#x27;Main module executed&#x27;);
`;
</script>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Event Loop in Node.js</title>
</head>
<body>
	<article id="f926d3a1-37bb-4f56-85c0-d6d501171885" class="page sans">
		<header>
			<div class="page-header-icon undefined"><span class="icon">🤡</span></div>
			<h1 class="page-title">Event Loop in Node.js</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<p id="30320b32-c0e1-44d4-8cd2-15e96a5b3f27" class="">
				<mark class="highlight-gray"
					>The Event Loop in Node.js is an essential component that manages the execution of asynchronous operations and enables
					non-blocking behavior.
				</mark>
			</p>
			<h2 class="">The workflow of the Event Loop can be summarized in the following steps:</h2>
			<ol type="1" class="numbered-list" start="1">
				<li>
					<mark class="highlight-gray">Running the main module: When you execute </mark><code><strong>node my-script.js</strong></code>,
					<mark class="highlight-gray">Node.js sets up the event loop and runs the main module</mark>
					(<code><strong>my-script.js</strong></code>)<mark class="highlight-gray"> outside of the event loop.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="2">
				<li>
					<mark class="highlight-gray"
						>Checking the loop: Once the main module is executed, Node.js checks if the loop is alive, meaning there are pending tasks
						(timers, I/O operations, etc.) to process in the event loop.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="3">
				<li>
					<mark class="highlight-gray"
						>Exit callbacks: If the loop is not alive, Node.js will try to exit after executing the exit callbacks registered using</mark>
					<code><strong>process.on(&#x27;exit&#x27;, foo)</strong></code>.
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="4">
				<li>
					<mark class="highlight-gray"
						>Entering the loop: If the loop is alive, Node.js will enter the event loop starting from the timers phase.</mark>
				</li>
			</ol>
			<p class="" />
			<h2 class="">The Event Loop in Node.js goes through various phases, each responsible for a specific type of task:</h2>
			<ol type="1" class="numbered-list" start="1">
				<li>
					<mark class="highlight-gray">Timers: This phase handles and executes timer callbacks, such as</mark>
					<code><strong>setTimeout()</strong></code> <mark class="highlight-gray">and </mark><code><strong>setInterval()</strong></code>.
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="2">
				<li>
					<mark class="highlight-gray">Pending callbacks: This phase processes I/O callbacks deferred to the next loop iteration.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="3">
				<li><mark class="highlight-gray">Idle, prepare: These are internal phases used by libuv for housekeeping purposes.</mark></li>
			</ol>
			<ol type="1" class="numbered-list" start="4">
				<li>
					<mark class="highlight-gray"
						>Poll: This phase retrieves new I/O events and executes I/O-related callbacks (excluding those from
					</mark><code><strong>setImmediate()</strong></code> <mark class="highlight-gray">and close callbacks).</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="5">
				<li>
					<mark class="highlight-gray">Check: This phase processes callbacks registered with</mark>
					<code><strong>setImmediate()</strong></code>.
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="6">
				<li>
					<mark class="highlight-gray">Close callbacks: This phase processes close callbacks, such as</mark>
					<code><strong>socket.on(&#x27;close&#x27;, foo)</strong></code>.
				</li>
			</ol>
			<p class="" />
			<p class="">
				<mark class="highlight-gray"
					>After the last phase, the event loop goes back to the first phase (timers) and continues the cycle, as long as there are pending
					tasks to process. When there are no more tasks, the event loop exits, and the Node.js process terminates.</mark>
			</p>
			<p class="" />
			<h2 class="">Here is an example with detailed comments explaining the various stages of the Node.js event loop:</h2>
			<div class="code"><code lang="typescript">{code1}<code /></code></div>
			pre>
			<p class="" />
			<p class="">The output of this script will be:</p>
			<pre class="code">
					<code>
$ Main module executed
$ nextTick executed (after current operation)
$ Timeout executed (Timers phase)
$ File read (I/O phase)
$ nextTick executed (microtask inside I/O callbacks)
$ Immediate executed (Check phase)
$ Immediate executed (Check phase)
</code>
</pre>
			<h2 class="">
				This example demonstrates the execution order of various asynchronous operations in relation to the event loop phases:
			</h2>
			<p class="" />
			<ol type="1" class="numbered-list" start="1">
				<li>
					<mark class="highlight-gray">Main module execution: The main module code is executed first, outside the event loop.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="2">
				<li>
					<code><strong>process.nextTick</strong></code><mark class="highlight-gray">: The callbacks registered with </mark><code
						><strong>process.nextTick</strong></code
					><mark class="highlight-gray"> are executed after the current operation, before the event loop starts.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="3">
				<li>
					<mark class="highlight-gray">Timers phase: Timer callbacks (e.g., from </mark><code><strong>setTimeout</strong></code><mark
						class="highlight-gray">) are executed in the Timers phase.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="4">
				<li>
					<mark class="highlight-gray">I/O phase: I/O callbacks (e.g., from </mark><mark class="highlight-red"
						><code><strong>fs.readFile</strong></code></mark
					><mark class="highlight-gray">) are executed in the I/O phase.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="5">
				<li>
					<code><strong>process.nextTick</strong></code><mark class="highlight-gray">
						(inside I/O callbacks): These callbacks are executed as microtasks after the I/O phase.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="6">
				<li>
					<mark class="highlight-gray">Check phase: Callbacks registered with </mark><code><strong>setImmediate</strong></code><mark
						class="highlight-gray">
						are executed in the Check phase.</mark>
				</li>
			</ol>
			<p class="">
				This example provides insight into the execution order of various asynchronous operations and how they relate to the event loop
				phases in Node.js.
			</p>
			<p class="" />
			<h2 class="">
				The Timer phase is responsible for managing and executing timer callbacks such as <code><strong>setTimeout</strong></code> and
				<code><strong>setInterval</strong></code>.
			</h2>
			<p class="" />
			<p class="">The workflow for the Timer phase can be described as follows:</p>
			<ol type="1" class="numbered-list" start="1">
				<li>
					<mark class="highlight-gray"
						>Entering Timer phase: The event loop enters the Timer phase to check for any timer callbacks ready to be executed.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="2">
				<li>
					<mark class="highlight-gray"
						>Timer queue: Timers are stored in a priority queue (heap memory) sorted in ascending order based on their expiration time.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="3">
				<li>
					<mark class="highlight-gray"
						>Check timers: The event loop iterates through the timer queue and calculates the difference between the current time and the
						timer&#x27;s registered time. If the difference is greater than or equal to the timer&#x27;s delay (now - registeredTime &gt;=
						delta), the timer is considered expired, and its callback is executed.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="4">
				<li>
					<mark class="highlight-gray">Execute timer callback: The event loop executes the callback function of the expired timer.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="5">
				<li>
					<mark class="highlight-gray"
						>Continue checking timers: The event loop continues checking the next timers in the queue. Since the timers are sorted in
						ascending order, it stops checking further timers as soon as it encounters a timer that hasn&#x27;t expired yet.</mark>
				</li>
			</ol>
			<ol type="1" class="numbered-list" start="6">
				<li>
					<mark class="highlight-gray"
						>Move to the next phase: After processing all expired timers, the event loop moves to the next phase.</mark>
				</li>
			</ol>
			<p class="">
				The Timer phase efficiently handles timer callbacks and ensures that they&#x27;re executed at the appropriate time based on their
				specified delay. The sorted timer queue allows the event loop to quickly identify and execute expired timers and move to the next
				phase when there are no more timers to process.
			</p>
			<p class="" />
			<h2 class=""><mark class="highlight-orange_background">Question</mark></h2>
			<p class="">
				<mark class="highlight-orange"
					>please check my understand is right, as far as I know the timer callbacks were stored in heap memory(on system memory) which
					format was queue - FIFO structure).</mark>
			</p>
			<h2 class=""><mark class="highlight-teal_background">Answer</mark></h2>
			<p class="">
				<mark class="highlight-teal"
					>Your understanding is partially correct. Timer callbacks are indeed stored in a heap data structure, but the heap is a priority
					queue that is sorted based on the timers&#x27; expiration times, not a simple FIFO (First-In-First-Out) queue.</mark>
			</p>
			<p class="">
				<mark class="highlight-teal"
					>The heap data structure is used because it provides an efficient way to access and manage timers sorted by their expiration
					times. This allows the event loop to quickly find and execute expired timers during the Timer phase.</mark>
			</p>
			<p class="">
				<mark class="highlight-teal"
					>So, to recap: Timer callbacks are stored in a heap data structure (in system memory), which is a priority queue sorted by the
					timers&#x27; expiration times. This helps the event loop to efficiently manage and execute timer callbacks during the Timer phase.</mark>
			</p>
			<h2 class=""><mark class="highlight-orange_background">Question</mark></h2>
			<p class="">
				<mark class="highlight-orange">then what is the type of the queue which stored algorithm?</mark>
			</p>
			<h2 class=""><mark class="highlight-teal_background">Answer</mark></h2>
			<p class="">
				<mark class="highlight-teal"
					>The queue used to store timers in the Timer phase is a priority queue. This data structure is implemented as a binary heap, which
					is a specific type of binary tree that maintains the heap property. In the context of the Timer phase, the heap is a min-heap,
					where the node with the smallest expiration time is always at the root.</mark>
			</p>
			<p class="">
				<mark class="highlight-teal"
					>A priority queue efficiently maintains elements in a sorted order based on their priority. In the case of timers, the priority is
					determined by their expiration times. The min-heap property ensures that the timer with the earliest expiration time is always at
					the top of the heap, allowing the event loop to quickly access and process expired timers during the Timer phase.</mark>
			</p>
			<p class="">
				<mark class="highlight-teal"
					>The choice of a binary heap for implementing the timer queue provides an efficient solution for insertion, deletion, and
					retrieval of timers. This choice ensures that the timer management during the Timer phase is both time and space-efficient,
					enabling the event loop to handle a large number of timers without significant performance degradation.</mark>
			</p>
			<p class="" />
		</div>
	</article>
</body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
