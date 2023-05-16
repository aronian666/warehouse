<script>
    import { Table, Input, Inputs, Icon } from "../../../lib/components";
    export let product;
    const inputs = [
        {
            property: "options",
            title: "Variantes",
            type: "checkbox",
            options: [
                { name: "Tamanio", values: [] },
                { name: "Material", values: [] },
                { name: "Color", values: [] },
            ],
            option: [(option) => option, "name"],
        },
    ];
</script>

<div>
    <Inputs {inputs} bind:object={product} />
    <div class="grid auto-fill" style="gap: 1rem">
        {#each product.options as variant}
            <div class="flex direction" style="gap: 0.5rem">
                <Input
                    on:keypress={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            if (e.target.value == "") return;
                            variant.values.push(e.target.value);
                            variant = variant;
                            e.target.value = "";
                        }
                    }}
                    title={variant.name}
                    name={variant.name}
                />
                <ul class="grid" style="gap: 0.5rem">
                    {#each variant.values as value, index}
                        <li
                            class="flex content items"
                            style="--c: space-between"
                        >
                            <span>{value}</span>
                            <button
                                on:click={(e) => {
                                    variant.values.splice(index, 1);
                                    variant = variant;
                                }}
                                type="button"
                            >
                                <Icon icon="delete" />
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
    <button
        type="button"
        on:click={(e) => (product.variants = product.getVariants())}
        >Generar</button
    >
</div>
{#if product.variants}
    <Table
        header={[
            ...product.options.map(({ name }) => name),
            "Precio",
            "Cantidad",
            "Foto",
        ]}
        array={product.variants}
        let:item
        let:index
    >
        <tr>
            {#each item.variant as value}
                <td>{value}</td>
            {/each}
            <td>
                <input type="text" bind:value={product.variants[index].price} />
            </td>
            <td>
                <input
                    type="text"
                    bind:value={product.variants[index].quantity}
                />
            </td>
            <td>
                <input type="file" bind:value={product.variants[index].photo} />
            </td>
        </tr>
    </Table>
{/if}

<style>
    li {
        border: 1px solid var(--gray);
        position: relative;
        border-radius: 0.2rem;
        overflow: hidden;
    }
    li > span {
        padding: 0 0.5rem;
    }
    li > button {
        all: unset;
        background-color: var(--gray2);
        padding: 0.25rem;
        cursor: pointer;
        display: grid;
        place-content: center;
    }
</style>
