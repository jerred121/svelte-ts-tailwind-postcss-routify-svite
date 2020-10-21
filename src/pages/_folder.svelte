<script lang="ts">
	import {url, isActive, layout, page} from '@roxi/routify'
	import SideNav from '../components/SideNav.svelte'
// $page.parent.children
	// console.log('page', $page)
	// console.log('url', $url)
	console.log('layout', $layout)
</script>

<style>
  #app {
    display: grid;
    min-height: 100vh;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: max-content 1fr auto;
    grid-gap: 1rem;
  }
  nav {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    border-bottom: 1px solid orangered;
  }
  main {
    margin: 0 auto;
    max-width: 1280px;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    border-top: 1px solid gray;
	}
	.active {
		font-weight: bold;
	}
</style>

<div id="app" class="container">
  <nav>
		<ul>
			{#each $layout.children as { path, title }}
				<li class:active={$isActive(path)}>
						<a href={$url(path)}>{title}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<SideNav />
  <main class="container">
    <slot />
  </main>
  <footer>footer</footer>
</div>