<svelte:head
	><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Window, Document</title>
</svelte:head>

<body>
	<article class="page sans">
		<header>
			<div class="page-header-icon undefined">
				<img class="icon" src="https://www.notion.so/icons/code_pink.svg" alt="pink code" />
			</div>
			<h1 class="page-title">Window, Document</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<h2>웹 브라우저에서의 자바스크립트 실행 순서</h2>
			<ul id="563424fa-d6a7-4a70-b9df-114e21352e0a" class="bulleted-list">
				<li style="list-style-type:disc">웹 브라우저에서 HTML 문서를 분석하고 표시하는 프로그램을 가리켜 rendering engine이라고 한다.</li>
			</ul>
			<ul id="55caed6d-ed67-4b16-9645-645cf244184b" class="bulleted-list">
				<li style="list-style-type:disc">
					rendering engine은 HTML type의 문법을 해석(parse)하고 DOM tree를 구축(build)한 후 HTML 문법으로 작성된 JavaScript 코드를 실행한다.
				</li>
			</ul>

			<br />
			<h2>
				<mark class="highlight-yellow">Rendering engine이 HTML type의 데이터를 해석하는 처리 순서</mark>
			</h2>
			<ol type="1" id="01714b74-4e71-4168-bacc-1847714e225b" class="numbered-list" start="1">
				<li>
					Web Browser에서 Web page를 열면 가장 먼저 <code>window</code> 객체가 생성된다.
					<code>window</code> 객체는 웹 페이지의 전역 객체로 웹 페이지의 <strong><strong><strong>tab</strong></strong></strong>마다
					생성된다.
				</li>
			</ol>
			<ol type="1" id="ec35457e-2468-4187-b947-53557f3dbf32" class="numbered-list" start="2">
				<li>
					<code>Document</code> 객체가 <code>window</code> 객체의 property로 생성되며, 웹 페이지를 해석해서 DOM tree의 구축을 시도한다.
					<code>Document</code> 객체는 <code>readyState</code> property를 가지고 있으며, <code>readyState</code> 의 초깃값은 “loading” 문자열이다.
				</li>
			</ol>
			<ol type="1" id="41cd6851-ae02-45c2-a734-261c74375586" class="numbered-list" start="3">
				<li>
					HTML document는 HTML 구문을 작성 순서에 따라 분석하며(ASC, 위에서 아래로) <code>Document</code> 객체 요소와 텍스트 노드를 추가해 나간다.
				</li>
			</ol>
			<ol type="1" id="1be83a0d-3cfb-43ac-ba38-493f70421b0f" class="numbered-list" start="4">
				<li>
					HTML document 안에 <code>script</code> element가 있다면 <code>script</code> element 안에 코드는 Javascript 문법에 따라 구문을
					분석한다. 구문을 에러없이 성공적으로 분석(interpret, 해석)해 오류가 발생하지 않음이 확인되면, 코드를 실행한다. 1.
					<em><strong>해석</strong></em>
					→ 2. <em><strong>코드 실행</strong></em>
				</li>
			</ol>
			<ol type="1" id="f0c8f68c-6c27-4b1d-b0de-d63538bfc0f5" class="numbered-list" start="5">
				<li>
					HTML document의 모든 내용을 분석(interpret, 해석)한 후 DOM 트리 구축을 완료하면, <code>document.readyState</code> 값이
					<strong>“interactive”</strong> 문자열로 변경된다.
				</li>
			</ol>
			<ol type="1" id="414681b0-a83f-44f6-848f-dc5fe7e119a1" class="numbered-list" start="6">
				<li>
					Web browser는 <code>Document</code> 객체에 DOM tree 구축(build) 완료를 알리기 위해 <code>DOMContentLoaded</code> 이벤트를 발생시킨다.
				</li>
			</ol>
			<ol type="1" id="8dc80388-7ede-4160-b942-bd22971af4ed" class="numbered-list" start="7">
				<li>
					<code>img</code> 등의 요소가 이미지 파일등의 외부 리소스를 읽어들여야 한다면, 이 시점에 읽어들인다. →
					<code>DomContentLoaded</code> 이벤트 발생 이후
				</li>
			</ol>
			<ol type="1" id="b74bd66c-d72a-4b39-9198-8fb9e10f114a" class="numbered-list" start="8">
				<li>
					모든 리소스를 읽어들인 이후에는 <code>document.readyState</code> 프로퍼티 값이 “complete” 문자열로 변경된다. 마지막으로 웹
					브라우저는 <code>Window</code> 객체를 상대로 <code>load</code> 이벤트를 발생시킨다.
				</li>
			</ol>
			<ol type="1" id="a9a1fd26-5fde-45ff-ab4f-9ac2c4f1f2ef" class="numbered-list" start="9">
				<li>이 시점부터 다양한 이벤트(사용자 정의 이벤트, 네트워크 이벤트)를 수신하며, 이벤트 발생시 이벤트 처리기가 비동기로 호출된다.</li>
			</ol>
			<p id="addc393a-64cb-4c29-8843-fcc08e56cba6" class="" />
		</div>
	</article>
</body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
