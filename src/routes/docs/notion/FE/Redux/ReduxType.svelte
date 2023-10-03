<script>
	import StateType from './StateType.svelte';

	const context = `
const symbol1 = Symbol(&#x27;mySymbol&#x27;);
const symbol2 = Symbol(&#x27;mySymbol&#x27;);

console.log(symbol1 === symbol2); // This will print &quot;false&quot; because each symbol is unique.

const serializedSymbol = JSON.stringify({ type: symbol1 });

console.log(serializedSymbol); // This will print &quot;{}&quot;. The symbol has been lost because it&#x27;s not serializable.

const deserializedObject = JSON.parse(serializedSymbol);

console.log(deserializedObject.type); // This will print &quot;undefined&quot;. The symbol can&#x27;t be reconstructed.
			`;

	const context2 = `
const string1 = &#x27;myString&#x27;;
const string2 = &#x27;myString&#x27;;

console.log(string1 === string2); // This will print &quot;true&quot;.

const serializedString = JSON.stringify({ type: string1 });

console.log(serializedString); // This will print &quot;{&quot;type&quot;:&quot;myString&quot;}&quot;.

const deserializedObject = JSON.parse(serializedString);

console.log(deserializedObject.type); // This will print &quot;myString&quot;.
			`;
</script>

<svelte:head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Redux Type</title>
</svelte:head>
<body>
	<article id="e72eec38-ac81-4c9b-8351-42834a273315" class="page sans">
		<header>
			<div class="page-header-icon undefined">
				<img class="icon" src="https://www.notion.so/icons/code_blue.svg" alt="code-blue" />
			</div>
			<h1 class="page-title">Redux Type</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<p>
				In Redux, an action must have a <code>type</code> property. The <code>type</code> is used to determine how the state should change in
				response to the action.
			</p>
			<p>
				The <code>type</code> property is typically a string, but it could technically be any JavaScript type. However, the comment suggests
				that it&#x27;s better to use strings rather than JavaScript <code>Symbol</code>s because strings are serializable.
			</p>
			<p>
				Serialization is the process of converting a data structure or object state into a format that can be stored (for example, in a file
				or memory buffer) or transmitted (for example, across a network connection link) and reconstructed later (possibly in a different
				computing environment). When data is serialized, it can be used to persist the object state or send the object from one program to
				another.
			</p>
			<p>
				Symbols in JavaScript are a unique and immutable data type that can be used as an identifier for object properties. However,
				<code>Symbol</code>
				is not a serializable type because it doesn&#x27;t have a literal syntax, and different instances of
				<code>Symbol</code> with the same description are not equal to each other. This means that they can&#x27;t be reconstructed after being
				serialized and deserialized.
			</p>
			<p>Here&#x27;s an example that demonstrates this:</p>
			<pre class="code code-wrap">
					<code lang="typescript">{context}</code></pre>
			<p>In contrast, strings are serializable and can be reconstructed after being serialized and deserialized:</p>
			<pre class="code code-wrap" lang="typescript"><code> {context2}</code></pre>
			<p>
				Redux uses serializable types for action <code>type</code> properties to ensure that actions can be logged, persisted, and replayed for
				debugging or testing purposes. This is why using strings for action types is recommended.
			</p>
			<figure class="link-to-page" id="state-type">
				<StateType />
			</figure>
		</div>
	</article>
</body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
