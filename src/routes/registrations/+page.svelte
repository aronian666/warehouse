<script>
    import { onMount } from "svelte";
    import { Table, Modal } from "../../lib/components";
    import { Registration } from "../../lib/tables";
    import New from "./New.svelte";
    export let data;
    $: ({ current_user, today } = data);

    let registrations = [];
    let modal = false;
    $: Registration.filter({
        match: [{ key: "user_id", value: "eq." + current_user.id }],
    }).then(({ data }) => (registrations = data));
    onMount(async () => {});
</script>

<section class="panel grid auto-fit">
    <div>
        <h3>Entrada</h3>
        {#if today}
            <p>{today.created_at.toLocaleTimeString()}</p>
        {:else}
            <p>Aun no se registro la entrada</p>
            <button on:click={(e) => (modal = true)}>Registrar</button>
        {/if}
    </div>

    <div>
        <h3>Salida</h3>
        {#if today?.updated_at}
            <p>{today.updated_at.toLocaleTimeString()}</p>
        {:else}
            <p>Aun no se registro la salida</p>
            {#if today}
                <button on:click={(e) => (modal = true)}>Registrar</button>
            {/if}
        {/if}
    </div>
</section>

<section class="panel grid">
    <h2>Registros</h2>
    <Table
        header={["Dia", "Entrada", "Salida", "Observaciones"]}
        array={registrations}
        let:item
    >
        <tr>
            <td>{item.day}</td>
            <td>{item.created_at.toLocaleTimeString()}</td>
            <td>{item.updated_at?.toLocaleTimeString()}</td>
            <td>{item.comment}</td>
        </tr>
    </Table>
</section>
{#if modal}
    <Modal
        class="panel grid"
        style="gap: 1rem"
        onClose={(e) => (modal = false)}
    >
        <New {current_user} last={today} />
    </Modal>
{/if}
