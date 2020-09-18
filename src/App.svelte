<svelte:head>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>
<script>
	import Home from './routes/Home.svelte';
	import DnDTools from './routes/DnDTools.svelte';
	import Nav from './components/Nav.svelte';
	import Footer from './components/Footer.svelte'

	import Router from 'svelte-spa-router';

	const routes = {
		'/': Home,
		'/dndtools': DnDTools,
	}
</script>

<style>
</style>

<Nav />

<body>
	<Router {routes} />
</body>

<!-- <Footer /> -->