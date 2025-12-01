<script>
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { CodeSquareIcon, Mail02Icon, WorkHistoryIcon } from '@hugeicons-pro/core-solid-rounded';
</script>

<div class="space-y-6">
	<div class="space-y-2">
		<h1 class="h1">Emma den Engelsen</h1>
		<p>
			I make and break thingies, usually on the internet. I like messing with software, modding 3d
			printers and writing overcomplicated bash scripts on occasion.
		</p>
	</div>
	<div class="flex h-25 gap-2.5">
		<button
			class="w-1/3 flex flex-col bg-sandrift-200 hover:bg-sandrift-300/60 active:bg-sandrift-300 active:w-[38%] items-center justify-center gap-0.5 transition-all rounded-l-3xl rounded-r-lg"
		>
			<HugeiconsIcon icon={CodeSquareIcon} size={32} color="currentColor" />
			<span>Projects</span>
		</button>
		<button
			class="w-1/3 flex flex-col bg-sandrift-200 hover:bg-sandrift-300/60 active:bg-sandrift-300 active:w-[38%] items-center justify-center gap-0.5 transition-all rounded-lg"
		>
			<HugeiconsIcon icon={WorkHistoryIcon} size={32} color="currentColor" />
			<span>Experience</span>
		</button>
		<button
			class="w-1/3 flex flex-col bg-sandrift-200 hover:bg-sandrift-300/60 active:bg-sandrift-300 active:w-[38%] items-center justify-center gap-0.5 transition-all rounded-r-3xl rounded-l-lg"
		>
			<HugeiconsIcon icon={Mail02Icon} size={32} color="currentColor" />
			<span>Contact</span>
		</button>
	</div>
	<div class="flex gap-2"></div>
</div>
