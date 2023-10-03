<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>About Tensorflow</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	padding-inline-start: 0;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.page-description {
    margin-bottom: 2em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
	empty-cells: show;
}
.simple-table td {
	height: 29px;
	min-width: 120px;
}

.simple-table th {
	height: 29px;
	min-width: 120px;
}

.simple-table-header-color {
	background: rgb(247, 246, 243);
	color: black;
}
.simple-table-header {
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-interactiveBlue { background-color: rgba(35, 131, 226, .07); }
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }
.select-value-color-pageGlass { background-color: undefined; }
.select-value-color-washGlass { background-color: undefined; }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="156a98c6-e3d8-4bc2-8ca2-fb61d5ad1e2b" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">🦁</span></div><h1 class="page-title">About Tensorflow</h1><p class="page-description"></p></header><div class="page-body"><p id="0609609e-bab5-4d41-8485-97536759e74f" class="">
</p><p id="07dc3067-b740-4bd0-8c39-f4b1df066d65" class="">
</p><h2 id="c1b1d49b-037a-42a3-a407-09572ced9ecf" class="">About Common Questions and Answers with ChatGPT</h2><p id="b705fa54-752d-4501-962c-a74ec86a4e4d" class="">
</p><h2 id="cbb217e7-a8d7-4bd4-bfcc-0f813fd5756a" class=""><mark class="highlight-teal">Question 1</mark></h2><ul id="9f056490-4210-49b0-bc7d-95f62c95a090" class="block-color-teal_background bulleted-list"><li style="list-style-type:disc">질문: Tensorflow.keras.models.함수()를 사용해 생성한 model 객체 정보는 python 프로세스가 종료될 때까지 메모리에 유지되는가?</li></ul><h2 id="ce27a131-52f8-4998-a232-52556b9a10b8" class=""><mark class="highlight-red">Answer 1</mark></h2><ul id="b49de3d5-b8ed-49f0-95e7-2ca687681790" class="bulleted-list"><li style="list-style-type:disc">정답: 그렇다</li></ul><p id="3499d1d8-d73d-4899-b49b-0070893fac6c" class="">When you create a model using <code><strong>tf.keras.models.Sequential()</strong></code> in TensorFlow, the model information is stored in the memory of the Python runtime until the process is stopped or the model is explicitly deleted.</p><ul id="c509f2ac-9b7b-4aa1-a761-1900d9be2f08" class="block-color-gray_background bulleted-list"><li style="list-style-type:disc"><code>tf.keras.models.Sequential()</code> 를 사용해 텐서 모델을 생성한 경우 Python, 프로그램이 종료될 때까지, 메모리에 존재한다.</li></ul><p id="2cf56848-ae61-41fd-936a-fb40b62d5043" class="">This means that if you create a model and then close your Python program without deleting the model, the model information will remain in memory until the Python interpreter is closed. If you later open a new Python program and try to create a new model with the same name, you may run into conflicts or memory errors.</p><ul id="c1814216-2897-4530-9077-99831a7a5561" class="block-color-gray_background bulleted-list"><li style="list-style-type:disc">때문에, 만약 파이썬 프로그램을 종료하기전, <code>del</code> statement를 사용하거나, pyhton 가비지콜렉터(자동으로 메모리 할당 관리해주는 칭구)를 사용해 메모리에서 모델 데이터를 해제시키지  않는다면, 다음번 프로그램 실행 시 같은 이름으로 model을 생성하거나, 동작을 수행한다면, memory error 가 발생한다.</li></ul><p id="9281ab40-6b6c-49c4-b05f-3b13570f6ff6" class="">It&#x27;s important to be aware of memory usage when working with large models or datasets in TensorFlow. You can use tools like <code><strong>tf.keras.backend.clear_session()</strong></code> to free up memory and remove any stored model information from previous sessions. Additionally, it&#x27;s good practice to delete models when you&#x27;re done using them, using the <code><strong>del</strong></code> statement or other Python garbage collection mechanisms.</p><ul id="d2298abd-fe8e-44bd-92ed-e82d774f2ddb" class="block-color-gray_background bulleted-list"><li style="list-style-type:disc"><strong>때문에 </strong>프로세스를 종료하기 전, <code>tf.keras.backend.clear_session()</code> 메서드를 사용해 모델 데이터를 메모리로부터 헤제시키는 습관이 중요하다.</li></ul><p id="25a95ee6-019e-4020-bfed-dbbd7f1e9761" class="">
</p><h2 id="12eaddc0-321c-4ef8-b6e0-9e611ecad002" class=""><mark class="highlight-teal">Question 2</mark></h2><ul id="1dd399eb-f9e9-4428-8199-d390de0497f4" class="block-color-teal_background bulleted-list"><li style="list-style-type:disc">질문: 테스트 코드와 각 라인별 해석</li></ul><h2 id="fe5dd86e-ba71-4f22-9a1f-02d6e2429f5c" class=""><mark class="highlight-red">Answer 2</mark></h2><pre id="ba4fe56a-3707-465b-a5f0-c08113a445ef" class="code"><code>## Create a Sequential model and add a Dense layer as the first layer.

model = tf.keras.models.Sequential()
model.add(tf.keras.Input(shape=(16,)))
model.add(tf.keras.layers.Dense(32, activation=&#x27;relu&#x27;))</code></pre><ul id="8c65df8c-5a6e-41b0-a010-40c8fae89ad8" class="bulleted-list"><li style="list-style-type:disc">이 코드는 <code><strong>tf.keras.models.Sequential()</strong></code> 함수를 사용하여 <code><strong>Sequential</strong></code> 모델을 만듭니다.</li></ul><ul id="9158660d-d4c0-4c4b-b6b0-1ab4d79b798d" class="bulleted-list"><li style="list-style-type:disc"><code><strong>Sequential</strong></code> 모델은 순서대로 실행되는 일련의 레이어입니다.</li></ul><ul id="b708a945-a4e1-49c0-b614-76f04dc7432b" class="bulleted-list"><li style="list-style-type:disc">모델의 첫 번째 레이어는 32개의 유닛과 ReLU 활성화 함수가 있는 <code><strong>Dense</strong></code> 레이어입니다.</li></ul><ul id="b3837f4d-9190-469c-b7b3-1e25b75aa2d2" class="bulleted-list"><li style="list-style-type:disc">첫 번째 레이어의 <code><strong>input_shape</strong></code>는 <code><strong>(16,)</strong></code>로 설정됩니다. 이는 모델의 입력이 길이가 16인 벡터임을 의미합니다.</li></ul><pre id="423fcb0b-24ae-4d63-b023-62e12d7f89e6" class="code code-wrap"><code>
# Now the model will take as input arrays of shape (None, 16)
# and output arrays of shape (None, 32).
# Note that after the first layer, you don&#x27;t need to specify
# the size of the input anymore:
model.add(tf.keras.layers.Dense(32))
model.output_shape</code></pre><ul id="64889d51-8324-4e0c-8057-6413bcab66cb" class="bulleted-list"><li style="list-style-type:disc">두 번째 레이어는 32개의 유닛이 있는 <code><strong>Dense</strong></code> 레이어입니다.</li></ul><ul id="3bca9944-bb37-4bf2-ab94-3b2ec042fca8" class="bulleted-list"><li style="list-style-type:disc">이 레이어에는 활성화 함수가 지정되어 있지 않으므로, 기본값인 선형 활성화 함수가 적용됩니다.</li></ul><ul id="98993497-6411-4bf6-9665-437cc9b408c7" class="bulleted-list"><li style="list-style-type:disc">이전 레이어에서 입력 형태가 유추되기 때문에, 입력 형태를 다시 지정할 필요가 없습니다.</li></ul><ul id="b09cc1a2-388a-4aaa-b90f-0ee10ddad442" class="bulleted-list"><li style="list-style-type:disc">모델의 <code><strong>output_shape</strong></code>가 콘솔에 출력됩니다. 입력 예제 수에 상관없이(<code><strong>None</strong></code>) 모델은 각 입력에 대해 길이가 32인 벡터를 출력하므로, 출력 형태는 <code><strong>(None, 32)</strong></code>입니다.</li></ul><p id="ab7f13db-457e-4646-994c-752841d10b1e" class="">요약하면, 이 코드는 두 개의 <code><strong>Dense</strong></code> 레이어를 가진 간단한 <code><strong>Sequential</strong></code> 모델을 만듭니다. 첫 번째 레이어는 ReLU 활성화 함수를 가지며 길이가 16인 입력 벡터를 사용합니다. 두 번째 레이어는 활성화 함수가 없으며 길이가 32인 벡터를 출력합니다.</p><h2 id="4846e168-b6e8-47d6-9800-3d1a99069754" class=""><mark class="highlight-teal">Question 3</mark></h2><ul id="758eac8e-34b4-4623-81b7-19e8e526d377" class="bulleted-list"><li style="list-style-type:disc">what&#x27;s mean the last <code>(None, 32)</code> tell me more detail</li></ul><h2 id="9e6617e4-99ff-4805-982e-e37f35a5b4c1" class=""><mark class="highlight-red">Answer 3</mark></h2><p id="94aca0c8-682f-4780-b119-35160cc640a9" class="">The <code><strong>(None, 32)</strong></code> output shape of the model means that the model can take any number of input examples, each of which is a vector of length 16, and will output a vector of length 32 for each input.</p><p id="8eb60895-b350-4655-ba3d-e4f22e098769" class="">The first dimension of <code><strong>(None, 32)</strong></code> corresponds to the batch size, which is the number of input examples that are processed at once during training or inference. Since the model can accept any number of input examples, the batch size is variable and is represented by <code><strong>None</strong></code>. During training or inference, you would typically specify a fixed batch size, but the model can handle different batch sizes.</p><p id="547f54a2-d994-4e52-b1d7-f9d4017641be" class="">The second dimension of <code><strong>(None, 32)</strong></code> corresponds to the output shape of the second <code><strong>Dense</strong></code> layer, which has 32 units. This means that the output of the model for each input example is a vector of length 32.</p><p id="002b1508-652c-41f1-b636-6ddb3629f672" class="">Overall, the <code><strong>(None, 32)</strong></code> output shape indicates that the model can accept input examples of variable batch size and will output a vector of length 32 for each input.</p></div></article></body></html>