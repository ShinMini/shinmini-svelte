<svelte:head>
	<title>IT Job Titles</title>
	<meta name="description" content="IT Job Titles" />
	<meta name="keywords" content="IT Job Titles" />
	<meta property="og:title" content="IT Job Titles" />
	<meta property="og:description" content="IT Job Titles" />
	<meta property="og:url" content="https://shinmini.com/docs/notion-shinmini/ITJobTitles" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://shinmini.com/images/og-image.png" />
	<meta property="og:image:alt" content="IT Job Titles" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="IT Job Titles" />
	<meta name="twitter:description" content="IT Job Titles" />
	<meta name="twitter:url" content="https://shinmini.com/docs/notion-shinmini/ITJobTitles" />
	<meta name="twitter:image" content="https://shinmini.com/images/og-image.png" />
	<meta name="twitter:image:alt" content="IT Job Titles" />
	<meta name="twitter:image:width" content="1200" />
	<meta name="twitter:image:height" content="630" />
</svelte:head>

<h1 class="page-title">IT Job Titles</h1>
<h2>생소해보이지만 알고보면 별거없는 IT 직함에 대해 알아보자</h2>
<article class="page-body">
	<div>
		<ul>
			<li>
				<a href="IT Job Titles/PM" class="hover:text-pink-300 font-bold">PM - Project Manager - 프로젝트 매니저</a>
			</li>
			<li>
				<a href="IT Job Titles/BrSE" class="hover:text-pink-300 font-bold">BrSE - Bridge Software Engineer - 브리지 소프트웨어 엔지니어</a>
			</li>
			<li>
				<a href="IT Job Titles/DA" class="hover:text-pink-300 font-bold">DA - Data Analyst - 데이터 분석가</a>
			</li>
		</ul>

		<h2>What is the Spec?</h2>

		In computer science,<code>spec</code> is short for <code>specification</code>. It refers to detailed descriptive information about a
		software or a hardware product. This could include the technical details, behavior, or expected output of a software module or a
		hardware component. In the context of the code snippet, you provided
		<code>import java.security.spec.EncodedKeySpec;</code>,
		<q><strong>spec</strong></q> is part of a package name in Java. Packages in Java are used for grouping related classes, interfaces, and
		sub-packages to avoid naming conflicts and to control access. The <code>java.security.spec</code> package provides classes and
		interfaces for key specifications and algorithm parameter specifications
		<a href="https://en.wikipedia.org/wiki/Formal_specification">[Source 3]</a>. In this case,
		<code>EncodedKeySpec</code>
		is a class in the <code>java.security.spec</code>
		package. It is an abstract class that represents the material that constitutes a (public or private) key in encoded format. The encoded format
		allows for the key to be easily transported and stored
		<a href="https://simple.wikipedia.org/wiki/Program_specification">[Source 4]</a>.

		<h2>
			Here is an example of how to use <code>EncodedKeySpec</code>:
		</h2>

		<pre lang="java" class="code code-wrap language-java">
<code>
import java.security.spec.EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

Public class Main 

Public static void main(String[] args)

        // This is a dummy key for demonstration purposes.
        String publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtzMnDEwpIvJSRIpTeNHu\\n" +
                "u6ZIfLCGcBzXt2S1JZnfXlYFi+3g5tDlQ+e24eAXkn3C/YyBlLc8nmbIK1H+eJO3\\n" +
                "tF9BuI0Hz4TuIyBUKh6y5f6z0Ried5+aNfA5YV3Ysv1bV5J+XgSqh3QNlbVKv+um\\n" +
                "/notA+2EW7Tx5YgtC+17kXHh+MTh89N1SyvNTBCVyif1yDQ2/r8Hd+Mh2TJ2Jrsa\\n" +
                "XZBNo6G5ZOGrU4ShO1+QSiWOK1doHsOb8WwSKcap2Z+6F2Z6Z77r7zp6CwGJ1gZa\\n" +
                "YaFJKy8xmxN+31hVZ62dV3iJ+P8O7O5FPWk7A5CoIULkm2pRmp/FT4EGig+radb9\\n" +
                "NwIDAQAB";

        byte[] decodedKey = Base64.getDecoder().decode(publicKey);
        EncodedKeySpec publicKeySpec = new X509EncodedKeySpec(decodedKey);

        // Now you can use publicKeySpec to instantiate a PublicKey object
</code>
</pre>
		<p>
			In the above example, we're creating an <code>EncodedKeySpec</code> object from a Base64 encoded string representation of a public key
			<a href="https://en.wikipedia.org/wiki/Specification_language">[Source 5]</a>.
		</p>
	</div>
</article>

<style lang="scss">
	li {
		&:first-child {
			padding-top: 0.5rem;
		}
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 0.5;
		padding: 0;
		margin: 0;
	}
	.page-body {
		white-space: normal;
	}
</style>
