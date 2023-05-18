<script>
    import { Product } from "../../../../lib/tables";
    import { Form, Inputs } from "../../../../lib/components";
    import { goto } from "$app/navigation";
    export let data;
    let product = new Product(data.product);
    const form = {
        name: { title: "Nombre del producto", required: true },
        category_id: {
            title: "Categoria",
            required: true,
            type: "select",
            options: data.categories,
            option: ["id", "name"],
        },
        unit_id: {
            title: "Unidad",
            required: true,
            type: "select",
            options: data.units,
            option: ["id", "name"],
        },
        price: {
            title: "Precio",
            required: true,
            type: "number",
            step: "0.01",
        },
    };
</script>

<Form
    onSubmit={async () => {
        const { id } = await product.upsert();
        return goto(`/products/${id}`);
    }}
>
    <Inputs object={product} {form} />
    <button>Actualizar</button>
</Form>
