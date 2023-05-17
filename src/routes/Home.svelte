<script>
    import { page } from "$app/stores";
</script>

<section class="flex content">
    <h1>Bienvenido al almacen {$page.data.current_user.name}</h1>
</section>

<style>
    section {
        height: 90vh;
        background-image: url("/svgs/boxes.svg");
        background-repeat: no-repeat;
        background-position: center;
    }
    h1 {
        font-size: 3rem;
    }
</style>
