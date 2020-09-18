<style>
    .footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 6%;
        background-color: rgb(39, 44, 49);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: white;
        padding-right: 1rem;
    }
</style>

<script>
    import Icon from 'svelte-awesome';
    import { code } from 'svelte-awesome/icons';

    const style = "color: white;";
</script>

<div class="navbar footer">
    <button class="btn"><Icon data={code} {style} /></button>
</div>