<script>
    const flashSales = [
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

    const categories = [
        "Sneakers",
        "Sandals",
        "Heels",
        "Kids",
        "Men",
        "Women",
        "Sales",
        "New Arrivals",
    ];
</script>

<!-- TOP BANNER -->
<div class="bg-purple-700 text-white text-sm text-center py-2 font-semibold">
    Up to 40% OFF | Free Delivery on Orders Above KSh 5,000
</div>

<!-- SEARCH / NAV ROW -->
<div
    class="bg-white shadow-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4"
>
    <a href="/" class="text-2xl font-bold text-gray-800">👟 Alentonette</a>
    <input
        type="text"
        placeholder="Search shoes, brands or styles"
        class="w-full md:w-1/2 px-4 py-2 border rounded focus:outline-none"
    />
    <div class="flex space-x-6 text-sm">
        <a href="/shop" class="text-gray-600 hover:text-black">Shop</a>
        <a href="/cart" class="text-gray-600 hover:text-black">Cart</a>
    </div>
</div>

<!-- HERO SECTION -->
<section
    class="bg-yellow-400 flex flex-col md:flex-row items-center justify-between p-6"
>
    <div class="text-left">
        <h2 class="text-3xl font-bold text-gray-900">🔥 Hot Picks Now</h2>
        <p class="mt-2 text-gray-700">Stylish shoes at unbeatable prices.</p>
        <a
            href="/shop"
            class="mt-4 inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
            Shop Now →
        </a>
    </div>
    <img
        src="/shoes/urban-sneaker.jpg"
        alt="promo"
        class="w-64 h-64 object-cover rounded shadow"
    />
</section>

<!-- CATEGORY SIDEBAR + FLASH DEALS -->
<div class="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto py-10 px-4">
    <!-- SIDEBAR -->
    <aside class="w-full md:w-1/4 space-y-3">
        <h3 class="text-lg font-semibold mb-2">Categories</h3>
        <ul class="space-y-2">
            {#each categories as cat}
                <li>
                    <a
                        href="/shop"
                        class="text-sm text-gray-700 hover:underline">{cat}</a
                    >
                </li>
            {/each}
        </ul>
    </aside>

    <!-- FLASH SALES -->
    <section class="w-full md:w-3/4">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">🔥 Flash Sale | Live Now</h3>
            <span class="text-sm text-red-600">Time Left: 12h : 23m : 36s</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {#each flashSales as item}
                <div class="bg-white rounded-lg shadow hover:shadow-md p-4">
                    <img
                        src={item.image}
                        alt={item.name}
                        class="w-full h-40 object-cover rounded mb-3"
                    />
                    <h4 class="text-md font-semibold">{item.name}</h4>
                    <p class="text-green-700 font-bold">{item.price}</p>
                </div>
            {/each}
        </div>
    </section>
</div>
