<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="p-4 md:p-16 lg:p-24 fixed top-3 md:top-0 left-0 flex items-center gap-4 z-10 h-10">
	<a href={resolve('/')} title="Home" class="group">
		<enhanced:img
			src="/static/img/circles_drawn.png"
			alt="Emma's logo"
			width="40"
			class="-mt-1 -rotate-2 group-hover:opacity-75 transition-opacity"
		/>
	</a>
	<div class="flex gap-1.5 h-10 w-100">
		<button
			class="w-1/3 flex bg-sandrift-200 hover:bg-sandrift-300/60 active:bg-sandrift-300 active:w-[38%] items-center justify-center gap-0.5 transition-all rounded-l-3xl rounded-r-lg"
		>
			<span>Projects</span>
		</button>
		<button
			class="w-1/3 flex bg-sandrift-200 hover:bg-sandrift-300/60 active:bg-sandrift-300 active:w-[38%] items-center justify-center gap-0.5 transition-all rounded-lg"
		>
			<span>Experience</span>
		</button>
		<button
			class="w-1/3 flex bg-sandrift-200 hover:bg-sandrift-300/60 active:bg-sandrift-300 active:w-[38%] items-center justify-center gap-0.5 transition-all rounded-r-3xl rounded-l-lg"
		>
			<span>Contact</span>
		</button>
	</div>
</div>

<div
	class="p-4 md:p-16 lg:p-24 h-full md:fixed md:mt-0 mt-20 flex flex-col justify-center top-0 left-0"
>
	<div class="md:max-w-150 md:w-auto w-full">
		{@render children()}
	</div>
</div>

<div class="fixed -bottom-[50vh] -right-[50vh] md:-bottom-[50vw] md:-right-[50vw] -z-10">
	<div
		class="rounded-full w-[100vh] h-[100vh] p-[10vh] md:w-[100vw] md:h-[100vw] md:p-[10vw] border border-sandrift-400/20"
	>
		<div
			class="rounded-full w-[80vh] h-[80vh] p-[10vh] md:w-[80vw] md:h-[80vw] md:p-[10vw] border border-sandrift-400/40"
		>
			<div
				class="rounded-full w-[60vh] h-[60vh] p-[10vh] md:w-[60vw] md:h-[60vw] md:p-[10vw] border border-sandrift-400/60"
			>
				<div
					class="rounded-full w-[40vh] h-[40vh] p-[10vh] md:w-[40vw] md:h-[40vw] md:p-[10vw] border border-sandrift-400/80"
				>
					<div
						class="rounded-full w-[20vh] h-[20vh] md:w-[20vw] md:h-[20vw] border border-sandrift-400"
					></div>
				</div>
			</div>
		</div>
	</div>
</div>
