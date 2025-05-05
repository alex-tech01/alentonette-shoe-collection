<script>
    import { cart, removeFromCart } from "$lib/cartStore.js";
</script>

<section class="max-w-4xl mx-auto py-10 px-4">
    <h1 class="text-3xl font-bold mb-6">🛒 Your Cart</h1>

    {#if $cart.length === 0}
        <p>
            Your cart is currently empty. <a
                href="/shop"
                class="text-blue-600 underline">Shop now →</a
            >
        </p>
    {:else}
        <ul class="space-y-4">
            {#each $cart as item}
                <li
                    class="bg-white rounded shadow p-4 flex items-center justify-between"
                >
                    <div>
                        <h2 class="font-semibold">{item.name}</h2>
                        <p class="text-sm text-gray-600">
                            KSh {item.price} × {item.quantity}
                        </p>
                    </div>
                    <button
                        class="text-red-600 text-sm hover:underline"
                        on:click={() => removeFromCart(item.id)}
                    >
                        Remove
                    </button>
                </li>
            {/each}
        </ul>

        <div class="mt-6 text-xl font-bold">
            Total: KSh {$cart.reduce(
                (total, item) =>
                    total +
                    parseInt(item.price.replace(/\D/g, "")) * item.quantity,
                0,
            )}
        </div>
    {/if}
</section>
