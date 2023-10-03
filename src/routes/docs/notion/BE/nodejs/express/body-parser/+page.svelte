<svelte:head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>body-parser</title></svelte:head>
<body
	><article id="7ff4bc9c-a8c4-403f-b6be-ff59348cf09c" class="page sans">
		<header>
			<div class="page-header-icon undefined">
				<img class="icon" alt="baby-lightgray" src="https://www.notion.so/icons/baby_lightgray.svg" />
			</div>
			<h1 class="page-title"><strong>body-parser</strong></h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<p class="" />
			<p class="">Node.js body parsing middleware는 req.body 속성 아래에서 핸들러 이전에 들어오는 request body를 분석합니다.</p>
			<p class="">
				req.body의 형태는 사용자가 결정하므로 이 객체의 모든 속성과 값은 신뢰할 수 없으며, 신뢰하기 전에 유효성을 검사해야 합니다.
			</p>
			<p class="" />
			<p class="">
				예를 들어, <code>req.body.foo.toString()</code> 함수의 경우, 다양한 원인으로 인해 실패할 수 있습니다.
			</p>
			<p class="">
				만약, foo 속성값이 비어있거나 <code>String</code> type(문자열 타입)이 아닐 수 있으며,
			</p>
			<p class="" />
			<p class="">
				실패 예시) <code>toString()</code>객체가 함수가 아닌 문자열이나 다른 사용자 입력값인 경우.
			</p>
			<p class="" />
			<p class="">이것은 그들의 복잡하고 대체로 큰 특성으로 인해 멀티파트 바디를 처리하지 않습니다.</p>
			<p class="" />
			<p class="">
				<strong
					><mark class="highlight-blue"
						><a href="https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction">Node.js에서 HTTP 트랜잭션의 구조</a></mark
					></strong>
			</p>
			<p class="" />
			<p class="">멀티파트 바디의 경우 다음 모듈을 참고하시는 것이 express 구조를 이해하시는데 도움이 되실겁니다.</p>
			<ul class="bulleted-list">
				<li style="list-style-type:disc"><code>busboy</code> 와 <code>connect-busboy</code></li>
			</ul>
			<ul class="bulleted-list">
				<li style="list-style-type:disc"><code>multiparty</code> 와 <code>connect-multiparty</code></li>
			</ul>
			<ul class="bulleted-list"><li style="list-style-type:disc"><code>formidable</code></li></ul>
			<ul class="bulleted-list"><li style="list-style-type:disc"><code>multer</code></li></ul>
			<p class="">위의 모듈은 다음과 같은 파서를 제공합니다:</p>
			<ol type="1" class="numbered-list" start="1"><li><code>JSON</code> body parser</li></ol>
			<ol type="1" class="numbered-list" start="2"><li><code>Raw</code> body parser</li></ol>
			<ol type="1" class="numbered-list" start="3"><li><code>Text</code> body parser</li></ol>
			<ol type="1" class="numbered-list" start="4">
				<li><code>URL-encoded</code> form body parser</li>
			</ol>
			<p class="" />
			<hr />
			<p class="">다음과 같은 다른 바디 파서를 참고하시는 것도 도움이 될 것입니다.</p>
			<ol type="1" class="numbered-list" start="1"><li><code>body</code></li></ol>
			<ol type="1" class="numbered-list" start="2"><li><code>co-body</code></li></ol>
		</div>
	</article></body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
