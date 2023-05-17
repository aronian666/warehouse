<script>
    import { Modal, Table } from "../../lib/components";
    import { User } from "../../lib/tables";
    import Edit from "./Edit.svelte";
    export let data;
    $: users = data.users.map((user) => new User(user));
    let user;
    /* const makeAdmin = async () => {
        const { user } = data.session;
        console.log(user);
        const { error } = await supabase.auth.admin.updateUserById(user.id, {
            user_metadata: { role: 1 },
        });
        if (error) console.error(error);
        else console.log("todo salio bien");
    }; */
</script>

<Table
    array={users}
    header={["Profile", "Nombre", "Email", "Rol", "Acciones"]}
    let:item
>
    <tr>
        <td>
            <img src={item.picture} alt={item.name} />
        </td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.roleString}</td>
        <td>
            <button class="small" on:click={(e) => (user = item)}>Editar</button
            >
        </td>
    </tr>
</Table>
{#if user}
    <Modal onClose={(e) => (user = null)} class="panel">
        <Edit {user} />
    </Modal>
{/if}

<style>
    img {
        width: 30px;
        border-radius: 50%;
    }
</style>
