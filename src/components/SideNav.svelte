<script lang="ts">
	import {url, isActive, layout, page, routes} from '@roxi/routify'
	export let node = $layout

	console.log(node.children)
</script>
<style>
	nav ul li {
		margin-left: 0;
		padding-left: 1rem;
	}
</style>
<template>
  <nav>
		<ul>
			{#each node.children as node}
				<li><!-- class:active={$isActive(path)} -->
					<a href={$url(node.path)} class:active={$isActive(node.path)}>
						{node.title}
					</a>
					<!-- Here we nest our nav component within itself and pass the current node's children to it     
							If you don't want nesting. Simply delete the snippet -->
					{#if node.children.length}
						<svelte:self {node} />
					{/if}
				</li>
				<!--  -->
			{/each}
		</ul>
	</nav>
</template>