<script>
    export let name;
    export let title;
    export let options;
    export let option;
    export let value;
    export let blank = false;
</script>

<fieldset>
    <label for={name}>{title}</label>
    <select id={name} {name} bind:value>
        {#if blank}
            <option value="" />
        {/if}
        {#each options as o}
            <option value={option ? o[option[0]] : o}>
                {option ? o[option[1]] : o}
            </option>
        {/each}
    </select>
</fieldset>
