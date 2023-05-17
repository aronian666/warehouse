<script>
    import { Modal, Table } from "../../lib/components";
    import { User } from "../../lib/tables";
    import Edit from "./Edit.svelte";
    export let data;
    $: users = data.users.map((user) => new User(user));
    let user;
</script>

<svelte:head>
    <title>Usuarios</title>
</svelte:head>

<section class="panel grid">
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
                <button class="small" on:click={(e) => (user = item)}
                    >Editar</button
                >
            </td>
        </tr>
    </Table>
</section>

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
