<script lang="ts">
	import { LucideMail } from '@lucide/svelte';
</script>

<div>
	<div class="bg-crust rounded-2xl">
		<div class="bg-overlay-0/50 px-4 py-2 rounded-2xl text-2xl">
			<span class="font-mono styled-hello"></span>
			<span class="font-mono styled-at"></span>
			<span class="font-mono styled-prpl"></span>
			<span class="font-mono styled-dot"></span>
			<span class="font-mono styled-wtf"></span>
		</div>
	</div>
	<div class="absolute -translate-y-4 rotate-6 translate-x-56 bg-mauve px-2 py-1 rounded-2xl">
		<LucideMail size="50" class="text-base" />
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
