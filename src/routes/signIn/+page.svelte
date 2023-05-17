<script>
    import { Form, Input } from "../../lib/components";

    export let data;
    export let form;
    $: inputs = form?.inputs || data.inputs;
</script>

<section class="flex items content">
    <Form method="post" class="flex direction panel" style="gap: 1rem">
        <h1 class="text-center">Iniciar sesión</h1>
        {#each inputs as input}
            <Input {...input} />
        {/each}
        <button>Iniciar sesión</button>
        <p>¿Aún no tiene una cuenta? Registrate <a href="/signUp">aquí</a></p>
    </Form>
</section>

<style>
    section {
        height: 100vh;
    }
</style>
