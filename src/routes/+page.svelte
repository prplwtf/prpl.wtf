<script lang="ts">
	import BadgeRow from '$lib/components/BadgeRow.svelte';

	const badges = [
		{ src: '/img/88x31/prpl_wtf.gif', alt: 'prpl.wtf' },
		{ src: '/img/88x31/vvqb_dev.gif', alt: 'vvqb.dev', href: 'https://vvqb.dev' },
		{ src: '/img/88x31/auri_lol.gif', alt: 'auri.lol', href: 'https://auri.lol' },
		{ src: '/img/88x31/liv_town.gif', alt: 'liv.town', href: 'https://liv.town' },
		{ src: '/img/88x31/circulars_dev.gif', alt: 'circulars.dev', href: 'https://circulars.dev' },
		{ src: '/img/88x31/bad_cash.gif', alt: 'bad.cash', href: 'https://bad.cash' }
	];
</script>

<div class="flex justify-between items-center">
	<div class="p-4 md:p-16 lg:p-24 md:max-w-208 md:w-auto w-full">
		<div class="space-y-4">
			<div class="space-y-2">
				<h1 class="h1">Emma den Engelsen</h1>
				<p>
					I make and break thingies, usually on the internet. I like messing with software, modding
					3d printers and writing overcomplicated bash scripts on occasion.
				</p>
			</div>
			<BadgeRow {badges} />
		</div>
	</div>
	<div class="p-4 md:p-16 lg:p-24 lg:block hidden">
		<enhanced:img
			src="/static/img/polaroids/placeholder_1.webp"
			alt="Polaroid placeholder 1"
			width="500"
			class="-rotate-5"
		/>
		<enhanced:img
			src="/static/img/polaroids/placeholder_2.webp"
			alt="Polaroid placeholder 2"
			width="500"
			class="-rotate-5"
		/>
	</div>
</div>
