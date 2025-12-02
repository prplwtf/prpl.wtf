<script lang="ts">
	import { LucideMail } from '@lucide/svelte';
</script>

<div class="bg-crust rounded-full flex gap-1">
	<div
		class="bg-overlay-0/50 px-3 py-1 rounded-l-2xl rounded-r-md flex flex-col justify-center items-center"
	>
		<LucideMail size="18" />
	</div>
	<div class="bg-overlay-0/50 px-3 py-1 rounded-l-md rounded-r-2xl">
		<div>
			<span class="font-mono styled-hello"></span>
			<span class="font-mono styled-at"></span>
			<span class="font-mono styled-prpl"></span>
			<span class="font-mono styled-dot"></span>
			<span class="font-mono styled-wtf"></span>
		</div>
	</div>
</div>

<style>
	.styled-wtf::before {
		content: 'wtf';
	}
	.styled-at::before {
		content: '@';
	}
	.styled-prpl::before {
		content: 'prpl';
	}
	.styled-dot::before {
		content: '.';
	}
	.styled-hello::before {
		content: 'hello';
	}
</style>
