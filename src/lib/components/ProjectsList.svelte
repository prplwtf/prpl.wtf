<script lang="ts">
	import { LucideArrowLeft, LucideArrowRight } from '@lucide/svelte';

	interface Projects {
		name: string;
		description: string;
		img: {
			src: string;
			alt: string;
		};
		href: string;
		key: string;
	}

	export let projects: Projects[] = [];
	export let paginated: boolean = true;
	export let perPage: number = 4;

	let currentPage = 0;
	$: totalPages = Math.ceil(projects.length / perPage);
	$: displayedProjects = paginated
		? projects.slice(currentPage * perPage, (currentPage + 1) * perPage)
		: projects;
</script>

<div class="space-y-2">
	<div class="grid grid-cols-2 gap-2 rounded-3xl overflow-hidden" style="line-height: 18px;">
		{#each displayedProjects as project (project.key)}
			<a
				href={project.href}
				target="_blank"
				rel="noopener noreferrer"
				class="w-[100%] bg-overlay-0/60 hover:bg-overlay-1/60 active:bg-overlay-1 transition-all rounded-lg space-y-2 overflow-hidden"
			>
				<img
					src={project.img.src}
					alt={project.img.alt}
					class="h-24 w-full object-cover rounded-b-lg"
				/>
				<div class="px-2 pb-4 space-y-1">
					<h1 class="text-2xl truncate font-medium">{project.name}</h1>
					<p class="line-clamp-2">{project.description}</p>
				</div>
			</a>
		{/each}
	</div>

	{#if paginated && totalPages > 1}
		<div class="flex items-center gap-2 text-sm">
			<button
				on:click={() => (currentPage = Math.max(0, currentPage - 1))}
				disabled={currentPage === 0}
				class="px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-overlay-0 bg-overlay-0/60 transition-colors rounded-full aspect-square"
			>
				<LucideArrowLeft size={16} />
			</button>
			<span class="text-xs opacity-70">
				{currentPage + 1} / {totalPages}
			</span>
			<button
				on:click={() => (currentPage = Math.min(totalPages - 1, currentPage + 1))}
				disabled={currentPage === totalPages - 1}
				class="px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-overlay-0 bg-overlay-0/60 transition-colors rounded-full aspect-square"
			>
				<LucideArrowRight size={16} />
			</button>
		</div>
	{/if}
</div>
