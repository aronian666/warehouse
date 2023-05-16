<script>
    import { getContext } from "svelte";
    import { Form, Inputs } from "../../lib/components";

    export let user;
    const onClose = getContext("onClose");
    const form = {
        id: {
            hidden: true,
        },
        role: {
            type: "select",
            title: "Rol",
            options: [
                { id: 0, name: "Usuario" },
                { id: 1, name: "Administrador" },
            ],
            option: ["id", "name"],
        },
    };
</script>

<Form action="?/update" method="post" sended={onClose}>
    <img src={user.picture} alt={user.name} />
    <p class="text-center">{user.email}</p>
    <Inputs object={user} {form} />
    <button type="submit">Actualizar</button>
</Form>

<style>
    img {
        border-radius: 50%;
    }
</style>
