<script lang='ts'>
    import { Modal, ModalBody, ModalFooter, ModalHeader } from 'sveltestrap/src';

    export let name = "Default";
    export let initiative = 0;
    let hp = 0;
    let ac = 0;
    let maxHP = 0;
    let effects = [];
    let openModal = false;
    const toggleModal = () => {openModal = !openModal};

    // Modal changes
    let newAC = ac;
    let newHP = hp;
    let newMaxHP = maxHP;
    let newEffect = '';
    let newEffects = [...effects];

    function save() {
        if (newAC != ac) ac = newAC;
        if (newHP != hp) hp = newHP;
        if (newMaxHP != maxHP) maxHP = newMaxHP;
        if (newEffects !== effects) effects = [...newEffects];
        toggleModal();
    }

    function addEffect() {
        if (newEffect !== "") {
            newEffects = [...newEffects, newEffect];
            newEffect = '';
        }
    }

    function removeEffect(i) {
        newEffects.splice(i, 1);
        newEffects = newEffects;
    }
</script>

<div class="card">
    <div class="card-body">
        <h3>{initiative} {name}</h3>
        <div class="row justify-content-center">
            <span class="badge badge-info"><p class="lead ac">AC {ac}</p></span>
            {#if hp <= 0}
                <span class="badge badge-danger"><p class="lead hp">HP {hp} / {maxHP}</p></span>
            {:else if hp <= maxHP / 2}
                <span class="badge badge-warning"><p class="lead hp">HP {hp} / {maxHP}</p></span>
            {:else}
                <span class="badge badge-success"><p class="lead hp">HP {hp} / {maxHP}</p></span>
            {/if}
        </div>
        <div class="fx-container">
            <div class="row justify-content-center fx-row">
                {#each effects as effect}
                    <span class="badge badge-warning"><p class="lead">{effect}</p></span>
                {/each}
            </div>
        </div>
        <div class="row justify-content-end">
            <button class="btn btn-primary card-btn" on:click={toggleModal}>Edit</button>
        </div>
    </div>
</div>

<Modal isOpen={openModal} toggle={toggleModal} transitionOptions>
    <ModalHeader toggle={toggleModal}>Edit {name}</ModalHeader>
    <ModalBody>
        <div class="body-container">
            <div class="row modal-row">
                <span class="badge badge-info"><p class="lead">AC</p></span>
                <!-- <input class="form-control sm-form" type="number" value={newAC} on:change={event => { newAC = event.target.value }}> -->
                <input class="form-control sm-form" type="number" bind:value={newAC}>
            </div>
            <div class="row modal-row">
                <span class="badge badge-success"><p class="lead">HP</p></span>
                <input class="form-control sm-form" type="number" bind:value={newHP}>
            </div>
            <div class="row modal-row">
                <span class="badge badge-success"><p class="lead">Max HP</p></span>
                <input class="form-control sm-form" type="number" bind:value={newMaxHP}>
            </div>
        </div>
        <br/>
        <div class="row justify-content-center">
            <input placeholder="New Effect" class="form-control fx-form" bind:value={newEffect}>
            <button class="btn btn-primary" on:click={addEffect}>Add</button>
        </div>
        <br/>
        <ul class="list-group">
            {#each newEffects as effect, i}
                <li class="list-group-item">
                    <div class="row">
                        <button class="btn btn-danger sm-btn" on:click={() => {removeEffect(i)}}>X</button>
                        <p class="lead">{effect}</p>
                    </div>
                </li>
            {/each}
        </ul>
    </ModalBody>
    <ModalFooter>
        <button class="btn btn-primary" on:click={save}>Save</button>
        <button class="btn btn-secondary" on:click={toggleModal}>Close</button>
    </ModalFooter>
</Modal>

<style>
    .card {
        width: 18rem;
        margin-bottom: 12px;
    }
    .card-btn {
        margin: 5px;
    }
    .fx-container {
        justify-content: left;
    }
    .fx-row {
        align-items: center;
    }
    p.lead {
        margin: 5px;
    }
    .badge {
        margin: 5px;
    }
    .sm-form {
        max-width: 4rem;
        margin: 5px;
    }
    .body-container {
        display: flex;
        justify-content: center;
    }
    .modal-row {
        margin-left: 5px;
        margin-right: 5px;
    }
    .fx-form {
        max-width: 12rem;
        margin-right: 10px;
    }
    .sm-btn {
        width: 2rem;
        height: 2rem;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>