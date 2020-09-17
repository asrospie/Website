<svelte:head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</svelte:head>
<script>
	import Home from './routes/Home.svelte';
	import DnDTools from './routes/DnDTools.svelte';

	import Router from 'svelte-spa-router';

	const routes = {
		'/': Home,
		'/dndtools': DnDTools,
	}
</script>

<body>
	<Router {routes} />
</body>