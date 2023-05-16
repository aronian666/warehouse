<script>
    import { getContext } from "svelte";
    import { Form, Input } from "../../lib/components";
    export let current_user;
    const onClose = getContext("onClose");
    export let last;
</script>

<h2 class="text-center">{last ? "Salida" : "Entrada"}</h2>
<div>
    <img src={current_user.picture} alt={current_user.name} />
    <p class="text-center" style="font-weight: 500;">
        {new Date().toLocaleTimeString()}
    </p>
    <p class="text-center" style="font-weight: 300; font-size: 0.8rem">
        {current_user.name}
    </p>
</div>
<Form class="grid" action="?/createRegister" sended={onClose}>
    <Input hidden={true} name="registration[id]" value={last?.id} />
    <button> Registrar </button>
</Form>
