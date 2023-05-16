<script>
    import { Icon, Input } from "../lib/components";
    const inputs = [
        {
            name: "user[email]",
            title: "Correo Electronico",
            required: true,
            type: "email",
        },
        {
            name: "user[password]",
            title: "Contrasena",
            required: true,
            type: "password",
        },
    ];
    const addintional = [
        {
            name: "user[options][data][name]",
            title: "Nombre",
        },
    ];
    let signIn = true;
</script>

<section class="container grid auto-fit content" style="gap: 1rem">
    <picture class="flex content items">
        <img src="/svgs/girls.svg" alt="Girls" />
    </picture>
    <div class="flex direction" style="gap: 1rem">
        <div class="grid auto-fit" style="--size: 150px; gap: 1rem">
            <button
                type="button"
                class:holed={!signIn}
                style="--color: var(--dark)"
                on:click={(e) => (signIn = true)}>Iniciar sesion</button
            >
            <button
                type="button"
                class:holed={signIn}
                style="--color: var(--dark)"
                on:click={(e) => (signIn = false)}>Registrarse</button
            >
        </div>
        {#if signIn}
            <form
                method="post"
                action="?/signIn"
                class="flex direction"
                style="gap: 1rem"
            >
                {#each inputs as input}
                    <Input {...input} />
                {/each}
                <button>Iniciar sesion</button>
            </form>
        {:else}
            <form
                action="?/signUp"
                method="post"
                class="flex direction"
                style="gap: 1rem"
            >
                {#each addintional.concat(inputs) as input}
                    <Input {...input} />
                {/each}
                <button>Registrase</button>
            </form>
        {/if}

        <form action="?/provider&provider=google" method="post" class="grid">
            <button class="holed" style="--color: var(--color1)">
                <Icon icon="public" />
                Google
            </button>
        </form>
    </div>
</section>

<style>
    section {
        height: 100vh;
    }

    picture img {
        width: 65%;
    }
    /* button[type="button"] {
        background: var(--gray);
    } */
</style>
