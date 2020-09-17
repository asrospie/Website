<svelte:head>
    <title>D&D Tools</title>
</svelte:head>

<script>
    import Nav from '../components/Nav.svelte';
    import { each } from "svelte/internal";

	$: list = [];
	$: newName = '';
	$: newInitiative = '';

	$: console.log(list);

	function addItem() {
		const newPlayer = {
			name: newName,
			initiative: parseInt(newInitiative),
		}
		list.push(newPlayer);
		list.sort(compare);
		list = list;
		newName = '';
		newInitiative = '';
	}

	function clearItems() {
		list = [];
	}

	function compare(a, b) {
		let comparison = 0;
		if (a.initiative < b.initiative)
			comparison = 1;
		else if (a.initiative > b.initiative)
			comparison = -1;
		return comparison;
	}

</script>

<Nav />

<main>
	<h1>Basic Initiative Tracker</h1>
	<input value={newName} placeholder="Name" type="text" on:change={e => { 
		newName = e.target.value;
	}} />
	<input value={newInitiative} placeholder="Initiative #" type="number" on:change={e => {
		newInitiative = e.target.value;
		e.target.value = ''; 
	}} />
	<button on:click={() => {
		addItem();
	}}>Add</button>
	<ul class="initiative-list">
		{#each list as player}
			<li>{player.name} {player.initiative}</li>
		{/each}
	</ul>
	<button on:click={clearItems}>Clear Creatures</button>
</main>

<style>
	main {
		text-align: center;
	}
	.initiative-list {
		list-style-type: none;
	}
</style>