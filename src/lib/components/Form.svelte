<script>
    import { formToJson } from "../utils";
    import { enhance } from "$app/forms";
    export let onSubmit;
    export let method = "post";
    export let action;
    export let sended;

    let loading = false;
</script>

<form
    {method}
    {action}
    class="grid"
    style="gap: 0.5rem"
    class:loading
    {...$$restProps}
    use:enhance={({ data, cancel }) => {
        loading = true;
        if (onSubmit) {
            cancel();
            const objectData = formToJson(data);
            onSubmit(objectData, data).then(() => (loading = false));
        }
        return async ({ result, update }) => {
            if (sended) sended(result);
            await update();
            loading = false;
        };
    }}
>
    <slot />
</form>
