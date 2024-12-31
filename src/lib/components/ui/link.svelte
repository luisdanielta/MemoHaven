<script lang="ts">
	import ILink from '$lib/icons/iLink.svelte';

	interface Ilink {
		text: string;
	}

	let { text }: Ilink = $props();
</script>

<a href="/" class="flex gap-2 text-mainC-500 hover:text-mainC-600"><ILink />{text}</a>
