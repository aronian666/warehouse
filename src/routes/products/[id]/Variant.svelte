<script>
    import { Icon, Select } from "../../../lib/components";
    import { cart } from "../../../lib/stores";
    import { Item } from "../../../lib/tables";
    export let product;
    let variant = product.getVariant();
    let current_photo = variant.photos[0];
    let item = new Item({ product_id: product.id });
</script>

<section class="grid auto-fit" style="gap: 1rem">
    <div class="flex grap">
        <div class="flex direction" style="gap: 0.5rem">
            {#each variant.photos as photo}
                <button on:click={(e) => (current_photo = photo)}>
                    <img src={photo.url} alt={photo.name} />
                </button>
            {/each}
        </div>
        <picture>
            <img src={current_photo?.url} alt={current_photo?.name} />
        </picture>
    </div>
    <div class="grid" style="gap: 1rem">
        <h1>{product.name}</h1>
        <p>{variant.price}</p>
        <Select
            title="Cantidad"
            name="item[quantity]"
            bind:value={item.quantity}
            options={[...Array(10).keys()]}
        />
        <button
            on:click={(e) => {
                if (variant.id) item.variant_id = variant.id;
                $cart.push(item);
                //cart.set($cart); // Por verse, tal vez ya funciona
                item = new Item(item);
            }}
        >
            <Icon icon="shopping_cart" />
            Agregar al carrito
        </button>
    </div>
</section>

<style>
    button:has(img) {
        all: unset;
        cursor: pointer;
    }
    img {
        aspect-ratio: 1;
    }
</style>
