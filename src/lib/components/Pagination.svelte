<script>
    import Icon from "./Icon.svelte";
    export let page;
    export let count;
    export let perPage = 10;

    $: paginates = Math.ceil(count / perPage);
    $: maxPages = Math.min(5, paginates);
    $: half = parseInt(maxPages / 2);
    $: rest = Array(maxPages)
        .fill(0)
        .map((a, index) => {
            if (page - half < 0) return index;
            if (page + maxPages > paginates)
                return paginates - maxPages + index;
            return index + page - half;
        });
</script>

<section class="flex" style="gap: 0.5rem">
    <button
        type="button"
        on:click={(e) => {
            if (page > 0) page--;
        }}
    >
        <Icon icon="west" />
    </button>
    {#if page - half > 0}
        <button type="button" on:click={(e) => (page = 0)}>1</button>
    {/if}
    {#if page - half > 0}
        <span>...</span>
    {/if}
    {#each rest as index}
        <button on:click={(e) => (page = index)} class:active={index === page}>
            {index + 1}
        </button>
    {/each}
    {#if page + maxPages - half + 1 < paginates}
        <span>...</span>
    {/if}
    {#if page + maxPages - half + 1 < paginates}
        <button type="button" on:click={(e) => (page = paginates - 1)}
            >{paginates}</button
        >
    {/if}
    <button
        type="button"
        on:click={(e) => {
            if (page < paginates - 1) page++;
        }}
    >
        <Icon icon="east" />
    </button>
</section>

<style>
    button {
        all: unset;
        width: 2rem;
        aspect-ratio: 1;
        display: grid;
        place-content: center;
        border-radius: 50%;
        border: 1px solid var(--dark);
        cursor: pointer;
    }
    button.active {
        background-color: var(--dark);
        color: white;
    }
</style>
