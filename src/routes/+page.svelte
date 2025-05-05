<!-- FLASH SALE ROW -->
<section class="w-full md:w-3/4">
    <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-semibold">🔥 Flash Sale | Live Now</h3>
        <span class="text-sm text-red-600">Time Left: 12h : 23m : 36s</span>
    </div>

    <div class="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {#each flashSales as item}
            <div
                class="min-w-[200px] bg-white rounded-lg shadow hover:shadow-md p-4 flex-shrink-0"
            >
                <img
                    src={item.image}
                    alt={item.name}
                    class="w-full h-36 object-cover rounded mb-3"
                />
                <h4 class="text-md font-semibold">{item.name}</h4>
                <p class="text-green-700 font-bold">{item.price}</p>
            </div>
        {/each}
    </div>
</section>
