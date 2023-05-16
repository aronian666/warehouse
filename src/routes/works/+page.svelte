<script>
    import { Table, Modal, Form, Inputs } from "../../lib/components";
    import Create from "./Create.svelte";

    export let data;
    let work;
</script>

<section class="panel">
    <div class="flex content items" style="--c: space-between">
        <h1>Trabajos</h1>
        <button type="button" on:click={(e) => (work = true)}
            >Agregar trabajo</button
        >
    </div>
</section>

<section class="panel grid">
    <Table header={["Trabajo", "Costo", "Actions"]} array={data.works} let:item>
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <button
                    class="holed"
                    style="--color: orange"
                    on:click={(e) => (work = item)}
                >
                    Editar
                </button>
            </td>
        </tr>
    </Table>
</section>
{#if work}
    <Modal class="panel" onClose={(e) => (work = null)}>
        <Create work={typeof work === "boolean" ? undefined : work} />
    </Modal>
{/if}
