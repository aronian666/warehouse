<script>
    import Home from "./Home.svelte";
    export let data;
</script>

<svelte:head>
    <title>Almacen</title>
</svelte:head>
{#if data.session}
    <Home current_user={data.current_user} />
{:else}
    <section class="grid auto-fit items container">
        <img src="/svgs/girls.svg" alt="Girls" />
        <div>
            <h1>almacen</h1>
            <div class="flex" style="gap: 0.5rem">
                <a class="button" href="signIn"> Iniciar sesion </a>
                <a class="holed button" href="signUp"> Registrarse </a>
            </div>
        </div>
    </section>
{/if}

<style>
    h1 {
        font-size: 3rem;
        text-transform: uppercase;
    }
    section {
        height: 100dvh;
    }
</style>
