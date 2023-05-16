<script>
    import { getContext } from "svelte";
    export let job;
    export let works;
    import { Form, Inputs } from "../../lib/components";
    const onClose = getContext("onClose");
    const inputs = [
        { name: "job[id]", hidden: true, value: job?.id },
        {
            name: "job[work_id]",
            title: "Trabajo",
            required: true,
            type: "select",
            options: works,
            value: job?.work_id,
        },
        {
            name: "job[quantity]",
            type: "number",
            required: true,
            title: "Cantidad",
            value: job?.quantity,
        },
    ];
</script>

<Form class="grid" style="gap: 1rem" method="post" sended={onClose}>
    <Inputs {inputs} />
    <button>{job ? "Editar" : "Agregar"}</button>
</Form>
