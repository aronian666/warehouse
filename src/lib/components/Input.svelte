<script>
    export let name;
    export let title;
    export let hidden = false;
    export let value = "";
    export let error = false;
</script>

<fieldset class:hidden>
    {#if title}
        <label for={name}>{title}</label>
    {/if}
    <input
        autocomplete="off"
        placeholder=" "
        id={name}
        {name}
        type="text"
        bind:value
        on:keypress
        {...$$restProps}
    />
    {#if error}
        <span>{error}</span>
    {/if}
</fieldset>

<style>
    span {
        font-size: 0.9rem;
        color: var(--red);
    }
</style>
