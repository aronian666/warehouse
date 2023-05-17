<script>
    import { Inputs, Pagination, Table } from "../../lib/components";
    import { goto } from "$app/navigation";
    import { Product } from "../../lib/tables";
    export let data;
    let products = [];
    let count = 0;
    let filter = {
        search: "",
        page: 0,
        order: "name",
        match: [
            { key: "category_id", value: "", sign: "eq" },
            { key: "unit_id", value: "", sign: "eq" },
        ],
    };
    const form = {
        search: { title: "Buscar" },
        match: [
            {
                value: {
                    options: data.categories,
                    type: "select",
                    option: ["id", "name"],
                    title: "Categoria",
                    blank: true,
                },
            },
            {
                value: {
                    title: "Unidad",
                    options: data.units,
                    type: "select",
                    option: ["id", "name"],
                    blank: true,
                },
            },
        ],
    };
    $: Product.filter(filter, {
        select: "*, category:category_id(*), unit:unit_id(*)",
    }).then(({ data, count: c }) => {
        products = data;
        count = c;
    });
</script>

<svelte:head>
    <title>Productos</title>
</svelte:head>

<section class="panel grid" style="gap: 1rem">
    <div class="flex content items" style="--c: space-between">
        <h1>Productos</h1>
        <a class="button" href="/products/new">Agregar</a>
    </div>
    <div class="flex" style="gap: 1rem">
        <Inputs bind:object={filter} {form} />
    </div>
    <Table
        header={["Nombre", "Cantidad", "Categoria", "Unidad", "Creado"]}
        let:item
        array={products}
    >
        <tr
            style="cursor: pointer"
            on:click={(e) => goto("/products/" + item.id)}
        >
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.category.name}</td>
            <td>{item.unit.name}</td>
            <td>{item.created_at.toLocaleString()}</td>
        </tr>
    </Table>
    <Pagination {count} bind:page={filter.page} />
</section>
