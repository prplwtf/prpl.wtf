<script lang="ts">
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import ProjectsList from '$lib/components/ProjectsList.svelte';

	const projects = [
		{
			name: 'Blueprint',
			description: "The modding platform that puts it's community first.",
			img: {
				src: '/img/projects/blueprint.jpeg',
				alt: 'Screenshot of the Blueprint website'
			},
			href: 'https://blueprint.zip',
			key: 'blueprint'
		},
		{
			name: 'Nebula',
			description: 'Most popular and best rated Pterodactyl theme. Built with Blueprint.',
			img: {
				src: '/img/projects/nebula.jpeg',
				alt: 'Screenshot of the Nebula theme'
			},
			href: 'https://nebula.style',
			key: 'nebula'
		},
		{
			name: 'Writea',
			description: 'Markdown blog tool written with HTML, JS and CSS.',
			img: {
				src: '/img/projects/writea.jpeg',
				alt: 'Screenshot of a "writea" blog site'
			},
			href: 'https://github.com/prplwtf/writea',
			key: 'writea'
		},
		{
			name: 'Bashatime',
			description: 'Somewhat functional wakatime plugin written in bash.',
			img: {
				src: '/img/projects/bashatime.jpeg',
				alt: 'blueprint woo'
			},
			href: 'https://github.com/prplwtf/bashatime',
			key: 'bashatime'
		}
	];
</script>

<div class="flex justify-between items-center">
	<div class="p-4 md:p-16 lg:p-24 md:max-w-208 md:w-auto w-full space-y-3">
		<div class="space-y-2">
			<h1 class="h1">Projects</h1>
			<p>
				I like building stuff with code. Here are a few of my (open source) projects where I did,
				exactly that.
			</p>
		</div>
		<a href="https://github.com/prplwtf" target="_blank">
			<button
				class="flex px-6 py-2 bg-overlay-0/60 hover:bg-overlay-1/60 active:bg-overlay-1 active:px-7 items-center justify-center gap-2 transition-all rounded-3xl cursor-pointer"
			>
				<SiGithub size={20} />
				<span>More on GitHub!</span>
			</button>
		</a>
		<div class="xl:hidden block mt-3">
			<ProjectsList {projects} perPage={2} />
		</div>
	</div>

	<div class="pe-35 w-200 xl:block hidden overflow-visible">
		<ProjectsList {projects} />
	</div>
</div>
