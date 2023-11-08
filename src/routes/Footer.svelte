<script>
	  import { GithubSolid, YoutubeSolid, LinkedinSolid } from 'flowbite-svelte-icons';

</script>
<footer>
  <div class="flex justify-between align-center gap-4">
		<a href="https://github.com/ShinMini"><GithubSolid size="md" class="w-5" /></a>
		<a href="https://kr.linkedin.com/in/shinmini"><LinkedinSolid size="md" class="w-5 text-blue-500 cursor-pointer" /></a>
		<a href="https://www.youtube.com/channel/UCNBcBaxbDp1MNEiTKtpEf-Q"><YoutubeSolid size="md"class="w-5 text-red-500 translate-y-1 cursor-pointer" /></a>
  </div>
  <p class="sm:text-sm text-xs">© 2023 made by ShinMini, in Korea</p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: clamp(12px, 1.2vw, 24px) clamp(24px, 2.4vw, 48px);

		border-top: 2px solid #333;
		color: rgba(255, 255, 255, 0.80);
	}
</style>