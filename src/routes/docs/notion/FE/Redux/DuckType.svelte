<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>Duck typing..?</title>
</head>
<body>
	<article class="page sans">
		<header>
			<div class="page-header-icon undefined"><span class="icon">🦆</span></div>
			<h1 class="page-title">Duck typing..?</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<p id="8b75c901-6d29-402c-82a2-2faa69fa9ece" class="">
				&quot;Duck typing&quot; is a programming concept that is used in dynamically typed languages, where the semantics of an object is
				determined by its current set of methods and properties, not by its inheritance from a particular class or its implementation of a
				specific interface. The name comes from the phrase &quot;If it looks like a duck, swims like a duck, and quacks like a duck, then it
				probably is a duck.&quot;
			</p>
			<p id="45745a43-116e-4a99-a86b-7d6fefc04483" class="">
				In other words, an object&#x27;s suitability is determined by the presence of certain methods and properties (its shape), rather
				than the actual type of the object. This allows for greater flexibility in a dynamically typed language, since you can call methods
				or access properties on an object if they exist, without worrying about the object&#x27;s type.
			</p>
			<p id="f970aa32-b69d-4f08-9787-cbdfcb24b6ec" class="">
				For example, consider a function that takes an object and calls its &quot;quack&quot; method. In a statically typed language, you
				might require that the object be of type &quot;Duck&quot;, and it would be a compile-time error to pass in an object of a different
				type. However, in a dynamically typed language with duck typing, any object that has a &quot;quack&quot; method can be passed to the
				function, regardless of its type. If the &quot;quack&quot; method doesn&#x27;t exist on the object, then it would be a runtime error
				when the method is actually called.
			</p>
			<p id="395cc0a9-a905-464b-a50b-6e95d3059a7f" class="">
				JavaScript and Python are examples of languages that utilize duck typing. TypeScript also has a form of duck typing because of its
				structural type system, even though TypeScript is statically typed. In TypeScript, an object&#x27;s type is determined by the shape
				that the object takes, i.e., what properties and methods it has. This allows for a lot of flexibility while still providing type
				safety.
			</p>
		</div>
	</article></body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
