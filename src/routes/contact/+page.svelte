<script lang="ts">
	import Email from '$lib/components/Email.svelte';
	import EmailMinimal from '$lib/components/EmailMinimal.svelte';
</script>

<div class="flex justify-between items-center">
	<div class="p-4 md:p-16 lg:p-24 md:max-w-208 md:w-auto w-full space-y-3">
		<div class="space-y-2">
			<h1 class="h1">Contact</h1>
			<p>
				For inquiries, product support, questions, professional opportunities and more; shoot me an
				email. I'll try my best to respond within a (work)day or two.
			</p>
		</div>
		<EmailMinimal />
	</div>

	<div class="pe-35 xl:block hidden overflow-visible">
		<Email />
	</div>
</div>
