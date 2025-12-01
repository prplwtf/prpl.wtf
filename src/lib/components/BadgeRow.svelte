<script lang="ts">
	interface Badge {
		src: string;
		alt: string;
		href?: string;
	}

	export let badges: Badge[] = [];
</script>

<div style="line-height: 18px;">
	{#each badges as badge (badge.alt)}
		{#if badge.href}
			<!-- eslint-disable svelte/no-navigation-without-resolve -->
			<a
				href={badge.href}
				target="_blank"
				class="group bg-sandrift-200 border-sandrift-300 border inline-block me-1"
			>
				<img src={badge.src} alt={badge.alt} class="" />
			</a>
		{:else}
			<div class="group bg-sandrift-200 border-sandrift-300 border inline-block me-1">
				<img src={badge.src} alt={badge.alt} class="" />
			</div>
		{/if}
	{/each}
</div>
