<script>
    import { Inputs } from "../../../lib/components";
    import { page } from "$app/stores";
    export let product;
    const inputs = [
        { property: "name", title: "Nombre", required: true },
        {
            property: "category",
            title: "Categoria",
            type: "selectsearch",
            options: $page.data.categories,
            show: "name",
        },
        {
            property: "brand",
            title: "Marca",
            required: true,
        },
        { property: "photo", title: "Foto", type: "file", required: true },
    ];
</script>

<Inputs {inputs} bind:object={product} />
