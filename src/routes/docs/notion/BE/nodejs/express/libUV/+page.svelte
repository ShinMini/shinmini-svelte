<script>
	const code1 = `#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;uv.h&gt;

void on_new_connection(uv_stream_t *server, int status);
void alloc_buffer(uv_handle_t *handle, size_t suggested_size, uv_buf_t *buf);

int main() {
    uv_loop_t *loop = uv_default_loop();

    uv_tcp_t server;
    uv_tcp_init(loop, &amp;server);

    struct sockaddr_in addr;
    uv_ip4_addr(&quot;0.0.0.0&quot;, 8080, &amp;addr);

    uv_tcp_bind(&amp;server, (const struct sockaddr *)&amp;addr, 0);
    int r = uv_listen((uv_stream_t *)&amp;server, 128, on_new_connection);
    if (r) {
        fprintf(stderr, &quot;Listen error: %s\n&quot;, uv_strerror(r));
        return 1;
    }

    return uv_run(loop, UV_RUN_DEFAULT);
}

void on_new_connection(uv_stream_t *server, int status) {
    if (status &lt; 0) {
        fprintf(stderr, &quot;New connection error: %s\n&quot;, uv_strerror(status));
        return;
    }

    uv_tcp_t *client = (uv_tcp_t *)malloc(sizeof(uv_tcp_t));
    uv_tcp_init(server-&gt;loop, client);
    if (uv_accept(server, (uv_stream_t *)client) == 0) {
        uv_read_start((uv_stream_t *)client, alloc_buffer, echo_read);
    } else {
        uv_close((uv_handle_t *)client, NULL);
    }
}

void alloc_buffer(uv_handle_t *handle, size_t suggested_size, uv_buf_t *buf) {
    buf-&gt;base = (char *)malloc(suggested_size);
    buf-&gt;len = suggested_size;
}`;
	const code2 = `// Import the &#x27;http&#x27; module to work with HTTP servers
const http = require(&#x27;http&#x27;);

// Define the server&#x27;s host and port
const hostname = &#x27;127.0.0.1&#x27;;
const port = 3000;

// Create an HTTP server that listens to incoming requests and sends a response
const server = http.createServer((req, res) =&gt; {
  // Set the HTTP response status code to 200 (OK) and the content type to &#x27;text/plain&#x27;
  res.statusCode = 200;
  res.setHeader(&#x27;Content-Type&#x27;, &#x27;text/plain&#x27;);

  // Write the response body with a message
  res.end(&#x27;Hello, World!\n&#x27;);
});

// Start the server and listen for incoming requests on the specified host and port
server.listen(port, hostname, () =&gt; {
  // Log a message to the console to indicate that the server has started successfully
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});`;
	const code3 = `#include &lt;iostream&gt;
#include &lt;uv.h&gt;

// Timer callback function
void timer_callback(uv_timer_t *timer) {
  // Print a message when the timer expires
  std::cout &lt;&lt; &quot;Timer expired!&quot; &lt;&lt; std::endl;

  // Stop and close the timer
  uv_timer_stop(timer);
  uv_close(reinterpret_cast&lt;uv_handle_t *&gt;(timer), nullptr);
}

int main() {
  // Initialize the default event loop provided by libuv
  uv_loop_t *loop = uv_default_loop();

  // Declare and initialize a timer handle
  uv_timer_t timer;
  uv_timer_init(loop, &amp;timer);

  // Start the timer with a 3-second delay (3000 milliseconds)
  uv_timer_start(&amp;timer, timer_callback, 3000, 0);

  // Run the event loop
  uv_run(loop, UV_RUN_DEFAULT);

  // Cleanup and close the event loop
  uv_loop_close(loop);

  return 0;
}`;
</script>

<svelte:head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>libUV library</title></svelte:head><body
	><article id="b65b2fe7-9b33-4390-90b8-c724e1440095" class="page sans">
		<header>
			<div class="page-header-icon undefined"><span class="icon">🔧</span></div>
			<h1 class="page-title">libUV library</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<p id="79ed7141-87b6-41cd-bbe8-a8fca93ac807" class="" />
			<p id="d49d04df-cfda-40bc-802e-56025f39b376" class="">
				<code><strong>libuv</strong></code> is a high-performance, cross-platform library that provides asynchronous I/O operations and event-driven
				programming. It was initially developed for Node.js but has since been adopted by other projects as well. Written in C, libuv enables
				a non-blocking, event-driven architecture, which is crucial for the performance of Node.js applications.
			</p>
			<p id="a2b7f091-5990-4a20-beaa-e95b0e48434f" class="">
				Node.js is a JavaScript runtime built on the V8 JavaScript engine, which allows JavaScript to be executed on the server-side.
				Node.js uses libuv as its core library to handle asynchronous I/O operations, such as file system operations, network communication,
				and timers. The Node.js library consists of built-in modules that provide additional functionality, like HTTP servers, crypto, and
				streams, built on top of the core libuv functionality.
			</p>
			<p id="61844923-0fad-4ea1-8e1e-f089fcab3669" class="">
				In summary, libuv is a low-level library that handles the asynchronous I/O and event-driven programming, while Node.js is a runtime
				that uses libuv to enable JavaScript execution on the server-side. Node.js also includes additional libraries and modules to provide
				higher-level functionality and features.
			</p>
			<p id="3fcf3405-8e04-488c-a54e-e03e0e568375" class="" />
			<h2 id="bb7c195d-d85a-4631-a410-92727102f11a" class="">
				Here&#x27;s an example in C demonstrating the usage of libuv for a simple TCP server
			</h2>
			<pre class="code code-wrap"><code>{code1}</code></pre>
			<p>
				This example demonstrates the basic structure of a libuv application, including initializing the event loop, creating a TCP server,
				binding it to an IP address and port, listening for new connections, and handling incoming data. The example uses libuv&#x27;s
				event-driven architecture to efficiently manage resources and handle multiple client connections simultaneously.
			</p>
			<p id="87adea93-815c-4655-b78e-2b4ecea396e3" class="">
				Keep in mind that this example is written in C, and when working with Node.js, you won&#x27;t typically interact with libuv
				directly. Instead, you would use Node.js APIs, which are built on top of libuv.
			</p>
			<br />
			<h2 class="">
				Here&#x27;s a simple example of a JavaScript code with comments for each line, demonstrating how to create a basic HTTP server using
				Node.js
			</h2>
			<pre class="code"><code>{code2}</code></pre>
			<p class="">
				This code demonstrates how to create a simple HTTP server in Node.js that listens for incoming requests and sends a &quot;Hello,
				World!&quot; response. The script imports the required &#x27;http&#x27; module, defines the server&#x27;s host and port, and sets up
				the server to handle incoming requests.
			</p>
			<p class="">
				When working with Node.js, you won&#x27;t typically interact with the libuv library directly. Instead, you will use Node.js APIs,
				which are built on top of libuv. Since libuv is a C library, you won&#x27;t find JavaScript examples using libuv directly. However,
				you can see the effects of libuv&#x27;s event-driven architecture through Node.js APIs.
			</p>
			<br />
			<h2 class="">
				Here&#x27;s a simple example of a C++ code with comments for each line, demonstrating how to create a basic timer using the libuv
				library
			</h2>
			<br />
			<pre class="code"><code
					>{code3}
</code></pre>
			<p class="">
				This example demonstrates the basic structure of a libuv application in C++, including initializing the event loop, creating a
				timer, starting the timer with a callback function, and running the event loop.
			</p>
			<p id="07fd7ec0-0d8a-48c4-8fb1-1126d8fb9f49" class="">
				The example uses libuv&#x27;s event-driven architecture to efficiently manage resources and perform the timer callback after a
				specified delay.
			</p>
			<p id="fa9e9935-7682-4145-bceb-9e1c48fd370b" class="" />
			<h2 class="">
				I&#x27;ll clarify the role of <code><strong>libuv</strong></code> in the context of the Node.js event loop and the example provided.
			</h2>
			<p id="2554e9c5-d77c-44f5-888b-38aa693f129a" class="">
				<code><strong>libuv</strong></code> is a high-performance, cross-platform C library that provides asynchronous I/O and event-driven programming
				capabilities. It plays a crucial role in Node.js, as it serves as the foundation for the event loop and the non-blocking I/O operations.
			</p>
			<p id="e1b1eb71-cf23-4aa4-8af3-dafede41ac99" class="">
				In the provided example, the various asynchronous operations such as timers (<code><strong>setTimeout</strong></code>), file I/O (<code
					><strong>fs.readFile</strong></code
				>), and others are built on top of <code><strong>libuv</strong></code>. When you use these Node.js APIs,
				<code><strong>libuv</strong></code> works behind the scenes to manage the event loop and ensure that your asynchronous operations are
				executed efficiently and in the correct order based on the event loop phases.
			</p>
			<p id="589bac19-2696-4aa4-b4a6-9fa3a42f5bcd" class="">
				Although you don&#x27;t interact with <code><strong>libuv</strong></code> directly when using Node.js, it&#x27;s essential to
				understand its role and how it enables the event-driven, non-blocking behavior that makes Node.js an ideal choice for handling
				multiple concurrent connections and I/O-bound tasks. The <code><strong>libuv</strong></code> library ensures that the event loop runs
				smoothly and manages the scheduling and execution of various asynchronous operations in your Node.js applications.
			</p>
		</div>
	</article></body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
