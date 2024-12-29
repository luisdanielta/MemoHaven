<script lang="ts">
	import { pb, pbError } from '$lib/context/pb/pb.svelte';

	if (pb) {
		pb.collection('users');
		console.log(pb);
	}
</script>
