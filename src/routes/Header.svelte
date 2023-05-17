<script>
    import { Icon } from "../lib/components";
    import { page } from "$app/stores";
    export let active = false;

    const pages = [
        {
            title: "Productos",
            path: "/products",
            icon: "inventory_2",
            permissions: [0, 1],
        },
        {
            title: "Categorias",
            path: "/categories",
            icon: "apartment",
            permissions: [1],
        },
        { title: "Usuarios", path: "/users", icon: "person", permissions: [1] },
    ];
</script>

<header class:active class="flex">
    <button on:click={(e) => (active = !active)}>
        <Icon icon={active ? "menu" : "close"} />
    </button>
    <nav
        style="flex: 1 1 auto; --c: space-between"
        class="flex direction content"
    >
        <div>
            {#each pages as { permissions, path, title, icon }}
                {#if permissions.includes($page.data.current_user.role)}
                    <a href={path} class="flex items" style="gap: 0.5rem">
                        <Icon {icon} />
                        <span>
                            {title}
                        </span>
                    </a>
                {/if}
            {/each}
        </div>
        <div class="grid" style="gap: 1rem">
            <h4>{$page.data.current_user.email}</h4>
            <a href="/logOut" class="flex items">
                <Icon icon="logout" />
                <span> Cerrar sesion </span>
            </a>
        </div>
    </nav>
</header>

<style>
    header {
        height: 100vh;
        background: white;
        padding: 1rem;
        transition: 0.3s;
        left: 0;
        position: relative;
        width: 250px;
        z-index: 1;
    }

    a {
        padding: clamp(0.6rem, 2vw, 0.75rem) clamp(0.8rem, 2vw, 1rem);
        border-radius: 0.5rem;
        color: var(--dark);
        text-decoration: none;
    }
    a > span {
        gap: 1rem;
        position: relative;
        transition: 0.2s;
        left: 0;
    }
    a:hover {
        background-color: #7380ec30;
        color: var(--color1);
        font-weight: 600;
    }
    header > button {
        all: unset;
        background-color: white;
        place-content: center;
        border-radius: 0.5rem;
        cursor: pointer;
        position: absolute;
        left: calc(100% + 1rem);
        display: none;
    }

    @media screen and (max-width: 768px) {
        header {
            position: fixed;
        }
        header > button {
            display: grid;
        }
        .active {
            left: -250px;
        }
    }
</style>
