<script>
	const code1 = `
/**
 * Internal &quot;virtual&quot; symbol used to make the \`CombinedState\` type unique.
 */
declare const $CombinedState: unique symbol

/**
 * State base type for reducers created with \`combineReducers()\`.
 *
 * This type allows the \`createStore()\` method to infer which levels of the
 * preloaded state can be partial.
 *
 * Because Typescript is really duck-typed, a type needs to have some
 * identifying property to differentiate it from other types with matching
 * prototypes for type checking purposes. That&#x27;s why this type has the
 * \`$CombinedState\` symbol property. Without the property, this type would
 * match any object. The symbol doesn&#x27;t really exist because it&#x27;s an internal
 * (i.e. not exported), and internally we never check its value. Since it&#x27;s a
 * symbol property, it&#x27;s not expected to be unumerable, and the value is
 * typed as always undefined, so its never expected to have a meaningful
 * value anyway. It just makes this type distinquishable from plain \`{}\`.
 */
interface EmptyObject {
  readonly [$CombinedState]?: undefined
}
export type CombinedState&lt;S&gt; = EmptyObject &amp; S

/**
 * Recursively makes combined state objects partial. Only combined state _root
 * objects_ (i.e. the generated higher level object with keys mapping to
 * individual reducers) are partial.
 */
export type PreloadedState&lt;S&gt; = Required&lt;S&gt; extends EmptyObject
  ? S extends CombinedState&lt;infer S1&gt;
    ? {
        [K in keyof S1]?: S1[K] extends object ? PreloadedState&lt;S1[K]&gt; : S1[K]
      }
    : S
  : {
      [K in keyof S]: S[K] extends string | number | boolean | symbol
        ? S[K]
        : PreloadedState&lt;S[K]&gt;
    }`;

	const code2 = `
/**
 * Recursively makes combined state objects partial. Only combined state _root
 * objects_ (i.e. the generated higher level object with keys mapping to
 * individual reducers) are partial.
 */
export type PreloadedState&lt;S&gt; = Required&lt;S&gt; extends EmptyObject
  ? S extends CombinedState&lt;infer S1&gt;
    ? {
        [K in keyof S1]?: S1[K] extends object ? PreloadedState&lt;S1[K]&gt; : S1[K]
      }
    : S
  : {
      [K in keyof S]: S[K] extends string | number | boolean | symbol
        ? S[K]
        : PreloadedState&lt;S[K]&gt;
    }`;

	const code3 = `
	{ 
		user: { 
			name: 
			string; 
			age: number; 
		}; 
		counter: number; 
	}`;

	const code4 = `
type State = {
  user: {
    name: string;
    age: number;
  };
  posts: string[];
};`;

	const code5 = `
type PreloadedState = {
  user?: {
    name?: string;
    age?: number;
  };
  posts?: string[];
};`;

	const code6 = `	
: {
[K in keyof S]: S[K] extends string | number | boolean | symbol
? S[K]
: PreloadedState&lt;S[K]&gt;
}`;

	const code7 = `
type State = {
  user: {
    name: string;
    age: number;
  };
  counter: number;
};`;

	const code8 = `
type PreloadedState = {
  user?: {
    name?: string;
    age?: number;
  };
  counter?: number;
};`;

	const code9 = `? S extends CombinedState&lt;infer S1&gt;
    ? {
        [K in keyof S1]?: S1[K] extends object ? PreloadedState&lt;S1[K]&gt; : S1[K]
      }
    : S`;

	const code10 = `type State = CombinedState&lt;{
  user: {
    name: string;
    age: number;
  };
  counter: number;
}&gt;;
`;

	const code11 = `
type PreloadedState = {
  user?: {
    name?: string;
    age?: number;
  };
  counter?: number;
};
	`;
</script>

<svelte:head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>State Type</title>
</svelte:head>
<body>
	<article id="f6e80ea6-ace0-4cef-b833-ced1f2797702" class="page sans">
		<header>
			<div class="page-header-icon undefined">
				<img class="icon" src="https://www.notion.so/icons/pull-request_gray.svg" />
			</div>
			<h1 class="page-title">State Type</h1>
			<p class="page-description" />
		</header>
		<div class="page-body">
			<p id="8130f729-4745-4e6d-9c6f-7e461ee74d88" class="" />
			<h2 id="2eee49e8-c572-47a2-8735-691dd4f3e7b1" class="">다음은 Redux 내에 기입된 state 관련 타입들이다.</h2>
			<pre class="code">
        <code lang="typescript">{code1}</code>
      </pre>
			<p>
				The provided TypeScript code declares a special
				<code>EmptyObject</code> interface that has a unique symbol property

				<code>$CombinedState</code>
				which is used to make the
				<code>CombinedState</code> type unique. This unique symbol is of type
				<code>unique symbol</code> and is used to create a unique identifier.
			</p>
			<p>
				The use of the
				<code>$CombinedState</code> symbol in the
				<code>EmptyObject</code> interface allows TypeScript to differentiate

				<code>EmptyObject</code>
				from any other object, even though its structure may be very similar. This becomes especially important when checking types in TypeScript,
				which operates with a structural type system (or &quot;duck typing&quot;) - if an object has the same structure, it&#x27;s of the same
				type.
			</p>
			<p>
				By using a unique symbol, the
				<code>EmptyObject</code> interface becomes distinguishable from just any object

				<code>EmptyObject</code>. As the comment states, the symbol doesn&#x27;t exist internally and the system never checks its value, but
				the property is still required for TypeScript to differentiate the
				<code>EmptyObject</code> type from other object types.
			</p>
			<p>
				The
				<code>CombinedState</code> type then takes this
				<code>EmptyObject</code> and combines it with a generic
				<code>S</code> type. The intersection
				<code>&amp;</code> means that a
				<code>CombinedState&lt;S&gt;</code> is both an
				<code>EmptyObject</code> (having the unique
				<code>$CombinedState</code> property) and the structure of
				<code>S</code>.
			</p>
			<p>
				So the purpose of the
				<code>CombinedState</code> type is to allow type-safe use of
				<code>combineReducers()</code> (from Redux), making sure that the combined state is unique and doesn&#x27;t conflict with other
				object types. This
				<code>CombinedState</code>
				type is used in Redux for defining the root state type in a store that is created using
				<code>combineReducers()</code>.
			</p>

			<hr />
			<h2 class="">사실 내가 가장 이해하기 어려웠던 코드는 다음과 같다.</h2>
			<pre class="code">
        <code>{code2}</code>
      </pre>
			<p>GPT를 통해 물어본 질문은 다음과 같다.</p>
			<blockquote>
				위 코드에서
				<code>Required&lt;S&gt;</code>가
				<code>EmptyObject</code>를 상속하지 않는 경우의 예시를 들어 코드 전체를 이해하게 쉽게 설명해줘.
			</blockquote>
			<p>답변은 다음과 같았다.</p>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					이 코드는 Redux에 사용되는

					<code>PreloadedState</code> 타입을 정의합니다. 이 타입은 Redux 앱의 초기 상태를 묘사하며, 주로 서버 렌더링이나 상태 복원을 위해
					사용됩니다. 이 타입은 앱의 상태를 재귀적으로 분석하고, Redux의
					<code>combineReducers</code>로 생성된 각 서브트리(각각의 리듀서에 대응하는 상태 부분)에 대해 선택적 상태(
					<code>Partial</code>)를 허용합니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					<code>Required&lt;S&gt; extends EmptyObject</code>는 상태
					<code>S</code>가 아무런 프로퍼티를 가지지 않는 객체인지 여부를 체크합니다.
					<code>Required&lt;S&gt;</code>는
					<code>S</code>의 모든 프로퍼티를 필수로 만드는 내장 유틸리티 타입입니다.

					<code>EmptyObject</code>는 프로퍼티가 없는 객체를 나타냅니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex" id="47920e1e-d870-4724-a86a-3668400b5228">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					그래서 만약
					<code>S</code>가 이미 프로퍼티를 가지지 않는 객체라면(
					<code>Required&lt;S&gt;</code>가
					<code>EmptyObject</code>를 상속하는 경우),
					<code>S</code> 그 자체를 반환합니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					반면에, 만약
					<code>S</code>가 어떤 프로퍼티를 가지고 있다면,

					<code>Required&lt;S&gt;</code>는
					<code>EmptyObject</code>를 상속하지 않게 됩니다. 이 경우의 조건부 타입은
					<code>S</code>의 각각의 프로퍼티를 분석하고, 만약 그 프로퍼티가
					<code>object</code> 타입이라면
					<code>PreloadedState</code>를 재귀적으로 적용하고, 아니라면 그 프로퍼티를 그대로 유지합니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">예를 들어,</div>
			</figure>
			<pre class="code code-wrap">
        <code>
	{code4}


</code>
      </pre>
			<p>
				위와 같은 상태 타입이 있다고 가정해봅시다. 이 경우
				<code>Required&lt;S&gt;</code>는
				<code>EmptyObject</code>를 상속하지 않게 됩니다. 따라서
				<code>PreloadedState</code>는 아래와 같이 계산됩니다.
			</p>
			<pre class="code code-wrap">
        <code>
{code5}
</code>
      </pre>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					각각의
					<code>user</code>와
					<code>posts</code> 필드는 이제 선택적이며,
					<code>user</code> 내부의
					<code>name</code>과

					<code>age</code>
					필드도 선택적입니다.

					<code>string[]</code>인
					<code>posts</code> 필드는 배열이므로
					<code>object</code> 타입으로 간주되지 않고, 따라서 재귀적으로

					<code>PreloadedState</code>를 적용하지 않습니다.
				</div>
			</figure>
			<hr />
			<h3>아직 햇갈리는 부분이 있어 GPT를 더 괴롭혀보았다.</h3>
			<blockquote>그렇다면, 아래의 구문이 실행되는 조건이 있어? 있다면 예시를 들어 설명해줘.</blockquote>
			<pre class="code">
        <code>{code6}</code>
      </pre>
			<p>
				<strong>돌아온 답변은 다음과 같았다.</strong>
			</p>
			<figure class="block-color-gray_background callout" style="display:flex" id="7e11f3f6-9467-42b8-bfa8-e8c5bc29b087">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					이 코드 조각은
					<code>S</code> 타입이
					<code>EmptyObject</code>를 상속하지 않는 경우, 즉
					<code>S</code>가 어떤 프로퍼티를 가지고 있는 경우에 실행됩니다. 이 조건부 타입은
					<code>S</code>의 각각의 프로퍼티를 분석하고, 만약 그 프로퍼티가 기본적인 타입 (
					<code>string</code>,
					<code>number</code>,
					<code>boolean</code>,
					<code>symbol</code>)이라면 그 프로퍼티를 그대로 유지하고, 아니라면

					<code>PreloadedState</code>를 재귀적으로 적용합니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex" id="205d36f3-87ec-4065-b461-1c74d56a7c67">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">예를 들어, 아래와 같은 타입이 있다고 가정해봅시다:</div>
			</figure>
			<pre class="code code-wrap">
        <code>{code7}</code>
      </pre>
			<p>
				이 경우
				<code>PreloadedState&lt;State&gt;</code>는 아래와 같이 계산됩니다:
			</p>
			<pre class="code code-wrap">
        <code>{code8}</code>
      </pre>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					<code>user</code> 프로퍼티는 객체 타입이므로
					<code>PreloadedState</code>가 재귀적으로 적용되고, 각각의 하위 프로퍼티(
					<code>name</code>과
					<code>age</code>)가 선택적이 됩니다. 반면에,
					<code>counter</code> 프로퍼티는
					<code>number</code> 타입이므로, 재귀적으로

					<code>PreloadedState</code>가 적용되지 않고 그대로 선택적 프로퍼티로 변환됩니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					따라서, 이 조건부 타입은 객체 타입의 프로퍼티에 대해 깊게 선택적 상태를 만들어주고, 기본 타입의 프로퍼티에 대해서는 단순히 선택적
					상태로 만들어줍니다.
				</div>
			</figure>
			<h3>아직 햇갈리는 부분이 있어 GPT를 더더욱 괴롭혀보았다. (1)</h3>
			<blockquote>
				그렇다면, 아래의 구문이 실행되는 조건이 있어? 있다면 예시를 들어 설명해줘. 만약 해당되는 예시가 있다면, 여러개의 예시를 들어
				설명해줘, 특히
				<code>CombinedState&lt;infer S1&gt;</code> 타입의 내부 로직과 함께 자세하게 설명해줘.
			</blockquote>
			<pre class="code">
        <code>{code9}</code>
      </pre>
			<br />
			<p>돌아온 답변은 다음과 같았다.</p>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					먼저,
					<code>CombinedState</code>라는 타입은 Redux에서
					<code>combineReducers</code>를 사용하여 여러 리듀서를 합칠 때 반환되는 복합 상태 타입을 나타냅니다.

					<code>infer S1</code>는
					<code>S</code>가
					<code>CombinedState&lt;Something&gt;</code> 형식이라면,
					<code>Something</code>을

					<code>S1</code>로 타입 추론하여 사용하겠다는 의미입니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">예를 들어 다음과 같은 상태가 있다고 가정해 보겠습니다:</div>
			</figure>
			<pre class="code code-wrap">
        <code>{code10}</code>
      </pre>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					위의 타입은
					<code>combineReducers</code> 함수를 사용하여 두 개의 리듀서 (
					<code>user</code>와
					<code>counter</code>)를 합친 복합 상태를 나타냅니다. 이제 이를
					<code>PreloadedState</code>로 변환하면 다음과 같습니다:
				</div>
			</figure>
			<pre class="code code-wrap">
        <code>
	{code11}
	</code>
      </pre>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					여기서는
					<code>S</code>가
					<code>CombinedState</code>의 형태이므로
					<code>S extends CombinedState&lt;infer S1&gt;</code> 분기가 실행됩니다.

					<code>infer S1</code>를 통해
					<code>S1</code>는 원본
					<code>State</code> 객체의 타입인
					<code>{code3}</code>가 됩니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					이후에는 객체의 각 프로퍼티에 대해 재귀적으로
					<code>PreloadedState</code>를 적용합니다.
					<code>user</code> 프로퍼티는 객체이므로, 다시
					<code>PreloadedState</code>를 적용하여 각각의 프로퍼티를 선택적으로 만들고,
					<code>counter</code> 프로퍼티는 기본 타입이므로 선택적 프로퍼티로 바로 변환됩니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					이렇게
					<code>PreloadedState</code>는 복합 상태를 적절하게 선택적 상태로 변환하여, 사전에 로드된 상태가 일부만 제공될 때도 Redux 스토어가
					안전하게 초기화될 수 있도록 해줍니다.
				</div>
			</figure>
			<h2>위 두 질문의 의도는 다음과 같다</h2>
			<p>
				→ 어느 state가 들어가든, 즉
				<code>CombinedState&lt;S1&gt;</code> 를 상속(extends)하던 하지 않던, 반환되는 Type 추론 값은 같을거라 생각했다.
			</p>
			<p>
				<strong> 따라서 </strong>
				<code>CombinedState&lt;S1&gt;</code>
				<strong> type의 상속 여부를 분기로 반환값을 구분지은 이유가 있는지 궁금했다.</strong>
			</p>
			<p>
				그리고 이와 관련해 굳이
				<code>redux</code> library에서
				<code>state</code> type 추론을, 분기를 생성해 구분지은 이유를 내 나름대로 추론해 다음과 같이 질문했다.
			</p>
			<blockquote class="">
				그렇다면, 굳이 CombinedState&lt;S&gt; 타입을 사용하는 이유는, PreloadedState&lt;S&gt; 타입을 통해 추론하고자 하는 State 타입이
				Combined 되어있는 State인지, 결합되지 않은 순수한 State인지 확인하는 역할로 사용하기 위해 사용하는거니?
			</blockquote>
			<p>그리고 칭찬받았다.</p>
			<figure class="block-color-gray_background callout" style="display:flex" id="2fc092e3-f8d4-40f9-8e7f-d3314e412822">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					그렇습니다, 맞습니다.
					<code>CombinedState&lt;S&gt;</code> 타입은 복합 상태를 나타내는 역할을 하며,

					<code>PreloadedState&lt;S&gt;</code>
					내부의 조건문에서 이를 통해 상태가
					<code>combineReducers</code>를 통해 생성된 복합 상태인지를 판단합니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex" id="c7921fe9-4705-47e3-b220-5d3c17ff5851">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					상태가
					<code>CombinedState&lt;S&gt;</code> 형태이면, 이는 여러 개의 리듀서를 합친 결과이며, 이를 재귀적으로 다루어야 합니다. 각 리듀서의
					초기 상태가 별도로 사전에 로드될 수 있기 때문에, 이 경우 각각의 하위 상태를
					<code>PreloadedState</code>로 재귀적으로 변환해야 합니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					반면에 상태가
					<code>CombinedState&lt;S&gt;</code> 형태가 아니라면, 이는 단일 리듀서의 상태이며, 리듀서가 반환하는 상태는 원시값일 수도 있고
					객체일 수도 있습니다. 원시값의 경우 그대로 두고, 객체인 경우에는 해당 객체의 프로퍼티를 재귀적으로

					<code>PreloadedState</code>로 변환합니다.
				</div>
			</figure>
			<figure class="block-color-gray_background callout" style="display:flex">
				<div style="font-size:1.5em">
					<span class="icon">🐚</span>
				</div>
				<div style="width:100%">
					따라서
					<code>CombinedState&lt;S&gt;</code> 타입은
					<code>PreloadedState&lt;S&gt;</code> 내부의 조건문에서 상태의 형태를 판별하는 역할을 합니다. 이는 Redux의 상태 트리가 복잡한 형태를
					가질 수 있고, 각각의 하위 상태가 별도로 사전에 로드될 수 있기 때문에 중요한 역할을 합니다.
				</div>
			</figure>
			<p>라고 한다 ~</p>
		</div>
	</article>
</body>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
