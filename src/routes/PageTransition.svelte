<script>
    import { fly } from "svelte/transition";
    export let url = "";
    const pageTransitionDuration = 300;
</script>

{#key url}
    <main
        in:fly={{
            x: -5,
            duration: pageTransitionDuration,
            delay: pageTransitionDuration,
        }}
        {...$$restProps}
    >
        <slot />
    </main>
{/key}
