<article class="page sans">
	<header>
		<h1 class="page-title">Pointer & Reference</h1>
		<p class="page-description" />
	</header>
	<div class="page-body">
		<h2>Pointers vs References in C++</h2>

		C, C++는<code>pointes</code>를 지원한다. 이는 대부분의 **다른** 프로그래밍 언어(e.g Java, Python, Ruby.. etc)등 과 차별되는 점이며,
		이들은 <code>reference</code> 라는 선언을 지원한다. 재미있는 점은 C와 다르게 C++의 경우 <code>pointer</code>뿐만 아니라,
		<code>reference</code>
		문법(혹은 선언) 또한 지원한다는 것이다. 오늘은 이러한 흥미로운 특징을 바탕으로 <code>pointer</code>와 <code>reference</code>의 차이점에
		대해 알아보도록 하자. 표면적으로는, <code>reference</code>와 <code>pointer</code> 둘 모두, 다른 객체에 접근(연결) 가능한 “값”을 할당
		받는다는 점에서 유사해 보인다. (~~나는 개인적으로 이정표라는 표현을 참 좋아한다.)~~ 이렇듯 두 선언 모두 유사한(혹은 동일해보이는) 기능을
		지원하는 까닭에 그 차이를 명확히 알지 못하는 경우가 많다. 오늘은 이렇듯 유사한 기능으로써 동작하는 두 선언(문법)의 차이점을 알아도록
		하자. 먼저 두 문법의 정의부터 정리하고 넘어가도록 하자.

		<a class="text-blue-500 font-bold" href="https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/">
			[Pointers]</a
		>: A pointer is a variable that holds the memory address of another variable. A pointer needs to be dereferenced with the operator to
		access the memory location it points to.

		<a href="https://www.geeksforgeeks.org/references-in-c/" class="text-blue-500">References</a>: A reference variable is an alias, that
		is, another name for an already existing variable. A reference, like a pointer, is also implemented by storing the address of an object.
		출처:
		<a href="https://www.notion.so/ee55f854027f40adbc51b71d5511c5a1?pvs=21" class="text-pink-500">
			Pointers vs References in C++ - GeeksforGeeks</a>

		<hr />

		<h2>번역</h2>

		<strong>포인터</strong>: 포인터는 다른 변수의 메모리 주소값을 갖는 변수이다. 포인터가 가리키는 메모리 위치에 접근하기위해서는
		<code>*</code>연산자를활용해 포인터를 역참조 해야한다. → 분명 한국말이지만 이해가 안가도 좋다. 보물지도에 표시된 X표시 정도로 생각하자.

		<strong>참조:</strong> 참조 변수는 별칭입니다(alias 라고한다), 즉 이미 존재하는 변수의 다른 이름입니다. 참조는 포인터와 마찬가지로
		객체의 주소를 저장하는 방식으로 구현되기도 합니다. → 마찬가지로 이해가 안가더라도, 헨젤과 그레텔 빵 조각 정도로 생각하고 넘어가자.

		<hr />

		<h2>번역의 번역</h2>
		<br />

		<code>pointer</code>와 <code>reference</code>의 차이점은 간단히 말해,

		<q><strong>대상을 참조하는 순서</strong></q>에 차이가 있다. 예를들어, 헨젤과 그레텔 동화 속 과자와 사탕으로 만들어진 마녀의 집을
		상상해보자. 그레텔이 마녀의 집을 찾아가기 위해서는, 마녀의 집의 위치를 알려주는
		<q
			><strong>표시(혹은 표식)</strong>
			(e.g. 지도, 이정표, 빵조각 등등)가 존재해야한다.

			<h2>Pointers</h2>
			이때, 마녀의 집 위치를 나타내는<strong>지도(map) 속 X 표시(mark)</strong>의 경우를 생각해보자. 지도(혹은 표시)를 보는 그레텔(존재)의
			입장에선, 마녀의 집이 표시된 위치에 실제로 존재하는지, 혹은 존재하지 않는지 여부를 확신할 수없다. 그저 지도에 표시된 정보를 통해, “저
			곳에 마녀의 집이 있음”이라는 정보를 알고 있는 것이 전부이다.

			<h2>References</h2>

			반면에, 마녀에 집에서부터 “빵조각으로 이어진 표식(mark) 혹은 흔적(trait)”를 생각해보자. 빵 조각 표식의 경우, 표시를 보는
			그레텔(존재)의 입장에선, 마녀의 집으로부터 표식이 이어진 것 알고있다. 따라서 이 표시(표식)의 끝에 무엇이 있는지 알고있다. 이와
			마찬가지로,<code>pointer</code>의 경우 그 끝에 어떤 값이 있을지 그레텔은 알 수 없다. → 그레텔은 단지 저 곳에 마녀의 집이 있을 거라는
			약속을 받은 상태가 전부이다. → 그 끝에 마녀의 집이 없거나(미리 없다고 알려주지 않은상태에서), 이상한 5성급 호텔(알려준 정보와 다름)이
			있다면, 자신이 속았음을 눈치챈 후 화를 내며 에러를 벹을 것이다. 하지만, <code>reference</code>의 경우 그레텔은 그 끝에서 표식을 끌고온
			본인이다. → 그레텔은 저 표식 끝에 무엇이 <strong>있었는지</strong>알고있다. → 그 끝에 마녀의 집이 없어졌거나(없어질 수 있음을 인지하지
			않은채), 이상한 5성급 호텔(알고있는 정보와 다름)이 지어지려고 하는 경우, 이곳은 마녀의 집만 있을 수 있다며 화를내며 에러를 벹을것이다.
			두, 선언 모두 그레텔은 저 표식의 끝에 무엇이 존재함을 미리 알고있다. 하지만 그레텔이 정보를 전달받는 순서는 엄연히 다르다.

			<code>pointer</code>의 경우 그레텔이 언제 정보(표시)를 전달받는지는 별로 중요하지않다. → 대신 확인해보고 갔는데
			<strong>없거나</strong>이상한거 들어왔음, 에러벹으며 화내면 된다. → 특히 갔는데 없으면 분노 조절 못한다. (NULL같은 소리하네) →
			이상한거 들어있으면, 마녀의 집 면적만큼만 보고 나머지 쌩깐다. (할당된 타입이 있다고 지구 끝까지 믿는다.)

			<code>reference</code>의 경우, 그레텔은 반드시 마녀의 집을 <strong>확인한 뒤(initialize라고 함)</strong> 정보(표식)을 전달받아야 한다.
			→ 안그러면 내가(그레텔이) 거기 갔는데 없을 수 있지 않냐며 화낸다. → 그리고 알려준 뒤 마녀의 집 자리에 이상한거 두려하면 화낸다.(컴파일
			도중 값 또는 타입 변경시 에러 벹으며 화낸다.)
			<hr />
			<h2>글을 마치며,</h2>
			난 내 글을 보고 포인터와 참조의 개념을 한번에 마법같이 이해할 수 있을 거라 생각하지 않는다. 다만, 포인터와 참조의 개념을 어느정도 이해하고
			있으나, 머리 속에서 정리를 하고싶은 대상에게 이 글이 머리 속 포인터와 참조의 갈피를 잡는데 도움되는, 하나의 이정표가 되었으면 하며 글을
			마무리한다.

			<a href="https://www.geeksforgeeks.org/pointers-vs-references-cpp/" class="text-pink-400 font-semibold">글 참조</a>
		</q>
	</div>
</article>

<style scoped>
	.page-body {
		white-space: normal;
	}
</style>
