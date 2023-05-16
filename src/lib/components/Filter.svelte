<script>
    import { Registration } from "../tables";
    import Form from "./Form.svelte";
    import Select from "./Select.svelte";
    let form;
    export let filter = [
        { title: "Ano", value: 2022, options: [2022, 2023], type: "select" },
        {
            title: "mes",
            value: "Abril",
            options: Registration.months,
            type: "select",
        },
    ];
    $: if (filter) form.submit();
</script>

<Form bind:this={form} method="get" action="">
    {#each filter as item}
        <Select bind:value={item.value} {...item} />
    {/each}
</Form>
