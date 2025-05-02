<script>
    let featured = [
        {
            name: "Urban Sneaker",
            price: "KSh 4,500",
            image: "/shoes/urban-sneaker.jpg",
        },
        {
            name: "Kids' Sandal",
            price: "KSh 1,200",
            image: "/shoes/kids-sandal.jpg",
        },
        {
            name: "Designer Heel",
            price: "KSh 6,800",
            image: "/shoes/designer-heel.jpg",
        },
    ];
</script>

<section class="bg-gray-50 py-12 px-4 text-center">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">
        Alentonette Shoe Collection
    </h1>
    <p class="text-lg text-gray-600 mb-8">
        Explore our top picks for style and comfort
    </p>

    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {#each featured as shoe}
            <div
                class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
                <img
                    src={shoe.image}
                    alt={shoe.name}
                    class="h-48 w-full object-cover rounded mb-4"
                />
                <h2 class="text-xl font-semibold">{shoe.name}</h2>
                <p class="text-green-700 font-bold">{shoe.price}</p>
            </div>
        {/each}
    </div>
</section>
<a
    href="/shop"
    class="inline-block mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
>
    Visit Full Shop
</a>
