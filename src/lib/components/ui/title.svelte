<script lang="ts">
	interface ITitle {
		text: string;
		className?: string;
	}

	let { text, className }: ITitle = $props();
</script>

<h1 class="text-2xl font-bold text-blue-500">{text}</h1>
