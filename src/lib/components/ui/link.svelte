<script lang="ts">
	import ILink from '$lib/icons/iLink.svelte';

	interface Ilink {
		text: string;
	}

	let { text }: Ilink = $props();
</script>

<a href="/" class="flex gap-2 text-blue-500 hover:text-blue-600"><ILink />{text}</a>
