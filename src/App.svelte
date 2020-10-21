<script lang="ts">
  import { Router } from '@roxi/routify/runtime';
  import { routes } from '../.routify/routes';
</script>

<style global>
	/* purgecss start ignore */
	@import 'tailwindcss/base';

	@import 'tailwindcss/components';
	/* purgecss end ignore */

	@import 'tailwindcss/utilities';
	/* line-awesome/dist/font-awesome-line-awesome/css/all */
	/* @import 'line-awesome/dist/font-awesome-line-awesome/css/all'; */
	/* TODO: Don't forget to remove unused styles in global.css */
	/* @import "../static/global.css"; */
  /* @import './styles/index.css'; */
</style>

<Router {routes} />

