<script lang="ts">
	import type { IBtnBase } from './btnBase.svelte';
	import BtnBase from './btnBase.svelte';

	let props: IBtnBase = $props();
</script>

<BtnBase {...props} className="bg-blue-100 text-blue-500 hover:text-blue-600 hover:bg-blue-200" />
