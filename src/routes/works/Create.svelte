<script>
    import { getContext } from "svelte";
    export let work;
    import { Form, Inputs } from "../../lib/components";
    const onClose = getContext("onClose");
    const inputs = [
        { name: "work[id]", hidden: true, value: work?.id },
        {
            name: "work[name]",
            title: "Trabajo",
            required: true,
            value: work?.name,
        },
        {
            name: "work[price]",
            type: "number",
            step: "0.01",
            required: true,
            title: "Precio",
            value: work?.price,
        },
    ];
</script>

<Form class="grid" style="gap: 1rem" method="post" sended={onClose}>
    <Inputs {inputs} />
    <button>{work ? "Editar" : "Agregar"}</button>
</Form>
