<script>
	const code1 = `enum Color {
  Red,    // 0
  Green,  // 1
  Blue    // 2
}

console.log(Color.Red); // Prints: 0`;

	const code2 = `enum Color {
  Red = 2,
  Green = 4,
  Blue = 6
}

console.log(Color.Green); // Prints: 4`;

	const code3 = `enum Color {
  Red = &quot;RED&quot;,
  Green = &quot;GREEN&quot;,
  Blue = &quot;BLUE&quot;
}

console.log(Color.Blue); // Prints: &quot;BLUE&quot;`;
</script>

<svelte:head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Serializable? destructible?</title>
</svelte:head>

<body>
	<article class="page sans">
		<header>
			<div class="page-header-icon undefined">
				<img class="icon" alt="list red" src="https://www.notion.so/icons/list_red.svg" />
			</div>
			<h1 class="page-title">Serializable? destructible?</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<h2>그럼 Enum은 Symbol 타입인가요? string 타입인가요? destructible 한가요? serializable 한가요?</h2>
			<br />
			<p>In TypeScript, an enum can be either a numeric or a string type, and it is serializable.</p>
			<p id="427a3177-2307-477c-aa19-6fb23fc62e78" class="">
				By default, enums are numeric, and they start at 0, incrementing by 1 for each member:
			</p>
			<pre class="code code-wrap"> <code lang="typescript">{code1}</code></pre>
			<p>You can also start the enum at a different number or set specific numbers for each member:</p>
			<pre class="code code-wrap"><code lang="typescript">{code2}</code></pre>
			<p>
				If you don&#x27;t specify any values, TypeScript will increment each member by 1, starting from 0. But if you do specify a value,
				TypeScript will start incrementing from the value you specified.
			</p>
			<p>Enums can also be of a string type:</p>
			<pre class="code code-wrap"><code lang="typescript">{code3}</code></pre>
			<p>
				Whether numeric or string, TypeScript enums are serializable. This is because they are ultimately represented as numbers or strings,
				and both numbers and strings are serializable in JavaScript:
			</p>
			<pre class="code code-wrap"><code lang="typescript"
					>console.log(JSON.stringify(Color.Red));   // Prints: &quot;0&quot; for numeric enum
console.log(JSON.stringify(Color.Blue));  // Prints: &quot;\\&quot;BLUE\\&quot;&quot; for string enum
</code></pre>
			<p>
				It&#x27;s important to note that TypeScript enums are not a Symbol type. Symbols in JavaScript are a completely different concept,
				as explained in the previous response.
			</p>
			<p>
				As for destructuring, TypeScript enums can&#x27;t be directly destructured as you might with objects or arrays. However, you can
				access enum members using bracket notation:
			</p>
			<pre class="code code-wrap"><code
					>const colorRed = Color[&#x27;Red&#x27;];  // 0 for numeric enum, &quot;RED&quot; for string enum</code></pre>
		</div>
	</article>
</body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
