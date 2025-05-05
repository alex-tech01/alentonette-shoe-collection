<script context="module">
    // Static data (mock database)
    const products = {
        "urban-sneaker": {
            id: "urban-sneaker",
            name: "Urban Sneaker",
            price: "KSh 4,500",
            image: "/shoes/urban-sneaker.jpg",
            description:
                "Comfortable and stylish sneakers perfect for daily urban life.",
        },
        "kids-sandal": {
            id: "kids-sandal",
            name: "Kids' Sandal",
            price: "KSh 1,200",
            image: "/shoes/kids-sandal.jpg",
            description:
                "Soft and secure sandals ideal for toddlers and kids on the move.",
        },
        "designer-heel": {
            id: "designer-heel",
            name: "Designer Heel",
            price: "KSh 6,800",
            image: "/shoes/designer-heel.jpg",
            description:
                "Elegant designer heels for the bold and fashionable woman.",
        },
    };

    export function load({ params }) {
        const product = products[params.id];

        if (!product) {
            throw error(404, "Product not found");
        }

        return {
            product,
        };
    }
</script>

<script>
    // This now pulls from 'data' returned by load
    export let data;
    const product = data.product;

    import { page } from "$app/stores";
    import { addToCart } from "$lib/cartStore.js";
</script>

<section class="p-6 max-w-3xl mx-auto">
    <img
        src={product.image}
        alt={product.name}
        class="w-full h-72 object-cover rounded mb-6"
    />
    <h1 class="text-3xl font-bold mb-2">{product.name}</h1>
    <p class="text-green-700 text-xl font-semibold mb-4">{product.price}</p>
    <p class="text-gray-700 text-lg mb-6">{product.description}</p>

    <button
        class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition mb-6"
        on:click={() => addToCart(product)}
    >
        🛒 Add to Cart
    </button>

    <br />
    <a href="/shop" class="text-blue-600 hover:underline text-sm"
        >← Back to Shop</a
    >
</section>
