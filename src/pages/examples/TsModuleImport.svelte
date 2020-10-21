<script lang="ts">
	import { meta } from '@roxi/routify'
	import { test } from '../../_scripts/test'
	$meta.title = 'TS Module Import'
	
	let res = test('page1')

	console.log('res', res)

</script>
<h1>TypeScript Module Import</h1>
{res}