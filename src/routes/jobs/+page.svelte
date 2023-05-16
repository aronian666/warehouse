<script>
    import { Table, Modal } from "../../lib/components";
    import Create from "./Create.svelte";

    export let data;
    let job;
</script>

<section class="panel">
    <div class="flex content items" style="--c: space-between">
        <h1>Mis trabajos</h1>
        <button on:click={(e) => (job = true)}>Agregar</button>
    </div>
</section>

<section class="panel grid">
    <Table header={["Trabajo", "Cantidad", "Fecha"]} array={data.jobs} let:item>
        <tr>
            <td>{item.work.name}</td>
            <td>{item.quantity}</td>
            <td>{item.created_at.toLocaleString()}</td>
        </tr>
    </Table>
</section>
{#if job}
    <Modal class="panel" onClose={(e) => (job = false)}>
        <Create works={data.works} />
    </Modal>
{/if}
