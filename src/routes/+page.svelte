<script>
    import Login from "./Login.svelte";
    import Home from "./Home.svelte";
    export let data;
</script>

{#if data.session}
    <Home current_user={data.current_user} />
{:else}
    <Login />
{/if}
