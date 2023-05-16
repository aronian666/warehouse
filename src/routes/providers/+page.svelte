<script>
    import { Table, Modal, Form } from "../../lib/components";
    import { Provider } from "../../lib/tables";
    import Inputs from "../../lib/components/Inputs.svelte";
    export let data;
    let providers = data.providers.data.map(
        (provider) => new Provider(provider)
    );
    let provider;
</script>

<svelte:head>
    <title>Proveedores</title>
</svelte:head>

<section class="panel grid" style="gap: 1rem">
    <div class="flex align content" style="--c: space-between">
        <h1>Proveedores</h1>
        <button on:click={(e) => (provider = new Provider())}>Agregar</button>
    </div>
    <Table
        let:item
        let:index
        array={providers}
        header={["Nombre", "Fecha de creacion", "Acciones"]}
    >
        <tr>
            <td>{item.name}</td>
            <td>{item.created_at.toLocaleDateString()}</td>
            <td class="flex" style="gap: 0.5rem">
                <button
                    class="small"
                    style="--color: var(--color3)"
                    on:click={(e) => (provider = item)}
                >
                    Editar
                </button>
                <button
                    on:click={async () => {
                        await item.delete();
                        providers.splice(index, 1);
                        providers = providers;
                    }}
                    class="small holed"
                    style="--color: var(--red)">Eliminar</button
                >
            </td>
        </tr>
    </Table>
</section>

{#if provider}
    <Modal class="panel" onClose={(e) => (provider = null)}>
        <Form
            onSubmit={async () => {
                provider = await provider.upsert();
                const index = providers.findIndex((p) => p.id === provider.id);
                if (index !== -1) providers[index] = provider;
                else providers.push(provider);
                providers = providers;
                provider = null;
            }}
        >
            <Inputs
                object={provider}
                form={{
                    name: { title: "Nombre del proveedor", required: true },
                }}
            />
            <button type="submit">
                {provider.id ? "Actualizar" : "Agregar"}
            </button>
        </Form>
    </Modal>
{/if}
