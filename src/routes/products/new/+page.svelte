<script>
    import { Form, Inputs } from "../../../lib/components";
    import { Product } from "../../../lib/tables";
    import { goto } from "$app/navigation";
    export let data;
    let product = new Product();
    const form = {
        name: {
            title: "Nombre del producto",
            required: true,
            placeholder: "Laptop gamer...",
        },
        category: {
            title: "Categoria",
            required: true,
            type: "selectsearch",
            options: data.categories,
            show: "name",
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
            placeholder: "10.0",
        },
    };
</script>

<section class="panel">
    <h1 class="text-center">Agregar producto</h1>
    <Form
        onSubmit={async () => {
            product.user_id = data.current_user.id;
            const { id } = await product.create();
            return goto(`/products/${id}`);
        }}
    >
        <Inputs object={product} {form} />
        <button>Agregar</button>
    </Form>
</section>
