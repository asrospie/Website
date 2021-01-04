<script lang='ts'>
    import { onMount } from 'svelte';
    import { stores } from '@sapper/app';
    const { page } = stores();

    let auth_url = '';
    let track: any;

    onMount(async () => {
        if ($page.query.code) {
            try {
                const res = await fetch('/livelyrics/sptfy/grant', {
                    method: 'GET',
                    headers: { 'code': $page.query.code },
                });
                track = await res.json();
            } catch (err) { track = 'error' }

        } else {
            const res = await fetch('/livelyrics/sptfy/spotify_auth');
            const body = await res.json();
            auth_url = body.url;
        }
    });

</script>

<svelte:head>
    <title>Lyrics</title>
</svelte:head>

<main>
    <h1>Simple Lyrics</h1>
    {#if auth_url}
        <a href={auth_url}>Authorize</a>
    {:else if track}
        <p>{JSON.stringify(track, null, 2)}</p>
    {/if}
</main>

<style>
    main {
        background-color: rgb(234, 236, 239);
        height: 100vh;
        text-align: center;
    }
</style>