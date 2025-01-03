<script lang="ts">
	import type { IBtnBase } from './btnBase.svelte';
	import BtnBase from './btnBase.svelte';

	let props: IBtnBase = $props();
</script>

<BtnBase {...props} className="bg-blue-500 text-blue-50 hover:bg-blue-600 hover:text-blue-100" />
