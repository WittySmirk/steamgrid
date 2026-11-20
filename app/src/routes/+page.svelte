<script lang="ts">
    import type { PageProps } from './$types';

	let { data }: PageProps = $props();
    $effect(() => console.log(data.post))
</script>

Hello {data.post[0].hello}

