<script>
    const shoes = [
        {
            id: "urban-sneaker",
            name: "Urban Sneaker",
            price: "KSh 4,500",
            image: "/shoes/urban-sneaker.jpg",
        },
        {
            id: "kids-sandal",
            name: "Kids' Sandal",
            price: "KSh 1,200",
            image: "/shoes/kids-sandal.jpg",
        },
        {
            id: "designer-heel",
            name: "Designer Heel",
            price: "KSh 6,800",
            image: "/shoes/designer-heel.jpg",
        },
    ];
</script>

<section class="bg-gray-100 py-10 px-4 min-h-screen">
    <h1 class="text-3xl font-bold text-center mb-6">🛍️ Our Shop</h1>

    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {#each shoes as shoe}
            <div
                class="bg-white rounded-xl shadow p-4 hover:shadow-lg transition flex flex-col items-center h-full"
            >
                <img
                    src={shoe.image}
                    alt={shoe.name}
                    class="h-36 w-auto max-w-full object-cover object-center rounded mb-4"
                />
                <div class="text-center">
                    <h2 class="text-lg font-semibold mb-1">{shoe.name}</h2>
                    <p class="text-green-700 font-bold">{shoe.price}</p>
                </div>
                <a
                    href={`/product/${shoe.id}`}
                    class="mt-3 text-sm text-blue-600 hover:underline"
                >
                    View Details →
                </a>
            </div>
        {/each}
    </div>
</section>
