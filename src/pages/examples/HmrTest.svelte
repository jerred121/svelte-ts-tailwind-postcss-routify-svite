<script lang="ts">
	import { metatags } from '@roxi/routify'
	metatags.title = 'HMR Preserve State'
	
	let value: string
	let testV = 101
	testV++
</script>
<h1>Page 1</h1>
{testV}!!
<h2>{value}</h2>
<input bind:value="{value}" />