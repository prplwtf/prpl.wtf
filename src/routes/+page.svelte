<script lang="ts">
	import BadgeRow from '$lib/components/BadgeRow.svelte';
	import { SiGithub, SiBluesky, SiPronounsdotpage } from '@icons-pack/svelte-simple-icons';

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
				<div class="flex gap-2 items-center">
					<h1 class="h1">I'm Emma</h1>
					<div class="rounded-full bg-overlay-1 px-2 py-0.5">
						<span class="!text-white">she/her</span>
					</div>
				</div>
				<p>
					I make and break thingies, usually on the internet. I like messing with software, modding
					3d printers and writing overcomplicated bash scripts on occasion.
				</p>
			</div>

			<BadgeRow {badges} />

			<div class="flex gap-2">
				<a href="https://github.com/prplwtf" target="_blank">
					<button
						class="flex px-6 py-2 bg-overlay-0/60 hover:bg-overlay-1/60 active:bg-overlay-1 active:px-7 items-center justify-center gap-2 transition-all rounded-l-3xl rounded-r-lg cursor-pointer"
					>
						<SiGithub size={20} />
						<span>GitHub</span>
					</button>
				</a>
				<a href="https://bsky.app/profile/prpl.wtf" target="_blank">
					<button
						class="flex px-6 py-2 bg-overlay-0/60 hover:bg-overlay-1/60 active:bg-overlay-1 active:px-7 items-center justify-center gap-2 transition-all rounded-lg"
					>
						<SiBluesky size={20} />
						<span>Bluesky</span>
					</button>
				</a>
				<a href="https://en.pronouns.page/@prplwtf" target="_blank">
					<button
						class="flex px-6 py-2 bg-overlay-0/60 hover:bg-overlay-1/60 active:bg-overlay-1 active:px-7 items-center justify-center gap-2 transition-all rounded-r-3xl rounded-l-lg"
					>
						<SiPronounsdotpage size={20} />
						<span>Pronouns</span>
					</button>
				</a>
			</div>
		</div>
	</div>

	<div class="pe-30 2xl:block hidden overflow-visible">
		<enhanced:img
			src="/static/img/polaroids/accordion.png"
			alt="Polaroid of an accordion locked in a cage, with a 'no accordions allowed' sign in front of it."
			width="500"
			class="rotate-10 relative z-0 translate-y-40 -translate-x-48"
		/>
		<enhanced:img
			src="/static/img/polaroids/sharks.jpg"
			alt="Polaroid of a bunch of IKEA shark plusies (blahaj) in a basket at the IKEA store."
			width="500"
			class="-rotate-5 relative z-10 -translate-y-40 translate-x-12"
		/>
	</div>
</div>
