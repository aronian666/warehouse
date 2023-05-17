<script>
    import { page } from "$app/stores";
</script>

<h1>{$page.data.current_user.email}</h1>
<p>{$page.data.current_user.name}</p>
