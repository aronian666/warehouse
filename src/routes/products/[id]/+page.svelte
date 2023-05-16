<script>
    import { Form, Inputs, Modal } from "../../../lib/components";
    import Table from "../../../lib/components/Table.svelte";
    import { Product, Record } from "../../../lib/tables";

    export let data;
    $: product = new Product(data.product);
    $: details = [
        { name: "Categoria", value: product.category.name },
        { name: "Unidad", value: product.unit.name },
        { name: "Precio", value: product.price.toFixed(2) },
        { name: "Creado por", value: product.user?.name },
        { name: "Cantidad", value: product.quantity },
    ];
    let record;
    const form = {
        client: { title: "A nombre de", required: true, minlength: "4" },
        quantity: { title: "Cantidad", required: true },
        price: { title: "Precio" },
        type: { hidden: true },
        product_id: { hidden: true },
    };
</script>

<div class="flex items content" style="--c: space-between">
    <h1>{product.name}</h1>
    <a href="/products/{product.id}/edit" class="button">Editar</a>
</div>
<section class="panel grid auto-fit">
    {#each details as { name, value }}
        <span style="font-weight: 600;">{name}</span>
        <span>{value}</span>
    {/each}
</section>

<section class="grid auto-fit" style="gap: 1rem">
    <div class="panel flex direction" style="gap: 0.5rem">
        <div class="flex items content" style="--c: space-between">
            <h2>Entradas</h2>
            <button
                class="holed"
                on:click={(e) =>
                    (record = new Record({ type: 0, product_id: product.id }))}
                >Agregar</button
            >
        </div>

        <Table
            let:item
            array={product.records.filter((record) => !record.type)}
            header={["Cantidad", "Precio", "Encargado", "Recibido de", "Fecha"]}
        >
            <tr>
                <td>{item.quantity}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.user.name}</td>
                <td>{item.client}</td>
                <td>{item.created_at.toLocaleString()}</td>
            </tr>
        </Table>
    </div>
    <div class="panel flex direction" style="gap: 0.5rem">
        <div class="flex items content" style="--c: space-between">
            <h2>Salidas</h2>
            <button
                class="holed"
                on:click={(e) =>
                    (record = new Record({ type: 1, product_id: product.id }))}
                >Agregar</button
            >
        </div>
        <Table
            let:item
            array={product.records.filter((record) => record.type)}
            header={["Cantidad", "Precio", "Encargado", "Entregado a", "Fecha"]}
        >
            <tr>
                <td>{item.quantity}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.user?.name}</td>
                <td>{item.client}</td>
                <td>{item.created_at.toLocaleString()}</td>
            </tr>
        </Table>
    </div>
</section>

{#if record}
    <Modal class="panel" onClose={(e) => (record = null)}>
        <Form
            method="post"
            action="?/addRecord"
            sended={(e) => (record = null)}
        >
            <Inputs object={record} {form} />
            <button type="submit">Agregar</button>
        </Form>
    </Modal>
{/if}
