<script>
    import { Steps, Form } from "../../../lib/components";
    import Details from "./Details.svelte";
    import Options from "./Options.svelte";
    import { Product } from "../../../lib/tables";
    import { goto } from "$app/navigation";
    const steps = [Details, Options];
    let product = new Product();
    const saveProduct = async () => {
        product = await product.create();
        return goto(`/products/${product.id}`);
    };
</script>

<h1>Crear producto</h1>

<Steps {steps} let:step let:updateStep class="grid">
    <Form
        onSubmit={async () => {
            if (step < steps.length - 1) updateStep(++step);
            else await saveProduct();
        }}
    >
        <svelte:component this={steps[step]} {product} />
        <div class="flex" style="gap: 0.5rem">
            {#if step > 0}
                <button type="button" on:click={(e) => updateStep(--step)}>
                    Anterior
                </button>
            {/if}
            {#if step < steps.length - 1}
                <button type="submit">Siguiente</button>
            {:else}
                <button type="submit">Guardar</button>
            {/if}
        </div>
    </Form>
</Steps>
