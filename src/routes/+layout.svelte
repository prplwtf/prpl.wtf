<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="p-4 md:p-16 lg:p-24 h-full md:fixed flex flex-col justify-center top-0 left-0">
	<div>
		{@render children()}
	</div>
</div>

<div class="fixed -bottom-[50vw] -right-[50vw] -z-10">
	<div class="rounded-full w-[100vw] h-[100vw] p-[10vw] border border-sandrift-400/20">
		<div class="rounded-full w-[80vw] h-[80vw] p-[10vw] border border-sandrift-400/40">
			<div class="rounded-full w-[60vw] h-[60vw] p-[10vw] border border-sandrift-400/60">
				<div class="rounded-full w-[40vw] h-[40vw] p-[10vw] border border-sandrift-400/80">
					<div class="rounded-full w-[20vw] h-[20vw] border border-sandrift-400"></div>
				</div>
			</div>
		</div>
	</div>
</div>
