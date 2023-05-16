<script>
    /* import { invalidate } from "$app/navigation";
    import { onMount } from "svelte"; */
    import Header from "./Header.svelte";
    import PageTransition from "./PageTransition.svelte";
    import { page, navigating } from "$app/stores";
    import { Loading } from "../lib/components";
    $: loading = !!$navigating;
    export let data;
    $: ({ supabase, session } = data);
    /* onMount(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, _session) => {
            if (_session?.expires_at !== session?.expires_at) {
                invalidate("supabase:auth");
            }
        });
        return () => subscription.unsubscribe();
    }); */
</script>

{#if loading}
    <Loading />
{:else if session}
    <div class="flex">
        <Header />
        <PageTransition
            url={$page.url.href}
            class="flex direction"
            style="padding: 1rem; flex: 1 1 100%; gap: 1rem"
        >
            <slot />
        </PageTransition>
    </div>
{:else}
    <PageTransition url={$page.url.href}>
        <slot />
    </PageTransition>
{/if}
