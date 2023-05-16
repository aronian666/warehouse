<script>
    import { Nested } from "../../lib/components";
    import { Category } from "../../lib/tables";
</script>

<svelte:head>
    <title>Categorias</title>
</svelte:head>

<section>
    <h1>Categorias</h1>
    <button>Agregar raiz</button>
</section>
<Nested model={Category} key="category_id" value={null} />
