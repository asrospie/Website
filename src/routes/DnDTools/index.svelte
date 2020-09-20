<svelte:head>
    <title>DnD Tools</title>
</svelte:head>

<style>
    main {
        text-align: center;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .row {
        justify-content: center;
        align-items: center;
        margin: 12px;
    }

    .row-element {
        margin: 2px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>

<script>
    import CreatureCard from './CreatureCard.svelte';

    let creatureList = [];
    let newName = '';
    let newInitiative;

    function addCreature() {
        if (newName == '') return;
        if (!newInitiative) return;
        let newCreature = {
            name: newName,
            initiative: parseInt(newInitiative),
        }
        creatureList.push(newCreature);
        creatureList.sort(compare);
        creatureList = creatureList;
        newName = '';
        newInitiative = '';
    }

    function compare(a, b) {
		let comparison = 0;
		if (a.initiative < b.initiative)
			comparison = 1;
		else if (a.initiative > b.initiative)
			comparison = -1;
		return comparison;
    }
    
    function clearCombat() {
        creatureList = [];
    }

</script>

<main>
    <div class="jumbotron">
        <h1 class="display-4">Simple Combat Tracker</h1>
        <br/>
        <div class="container">
            <div class="row add">
                <div class="form-group row-element">
                    <input value={newName} on:change={event => {
                        newName = event.target.value;
                    }} placeholder="Creature Name" type="text" class="form-control">
                </div>
                <div class="form-group row-element">
                    <input value={newInitiative} on:change={event => {
                        newInitiative = event.target.value;
                    }} placeholder="Initiative" type="number" class="form-control">
                </div>
                <button class="btn btn-primary add-btn row-element" on:click={addCreature}>Add</button>
            </div>

            <ul>
                {#each creatureList as creature, i}
                    <li>
                        <CreatureCard  
                            name={creature.name}
                            initiative={creature.initiative}
                        />
                    </li>
                {/each}
            </ul>

            <button class="btn btn-danger" on:click={clearCombat}>Clear Combat</button>
        </div>
    </div>
</main>