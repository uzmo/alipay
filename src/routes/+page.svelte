<script>
    import { goto } from '$app/navigation';
    
    async function pay(){
        const response = await fetch(`/api/pay`, {
            method: 'POST',
            credentials: 'include',
            // body: JSON.stringify(data || {}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((r) => r.json())
        console.log(response)
        goto(response.result);
    }
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={pay}>pay</button>
