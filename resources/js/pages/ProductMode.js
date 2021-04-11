import React from 'react'

const ProductMode = () => {
    return (
        <div class="flex-grow flex">
            <div class="flex flex-col bg-blue-gray-50 h-full w-full py-4">
                <div class="flex px-2 flex-row relative">
                    <div class="absolute left-5 top-3 px-2 py-2 rounded-full bg-cyan-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" class="bg-white rounded-3xl shadow text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none" placeholder="Cari menu ..." />
                    </div>
                    <div class="h-full overflow-hidden mt-4">
                    <div class="h-full overflow-y-auto px-2">
                        <div class="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25">
                            <div class="w-full text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                                <p class="text-xl">
                                YOU DON'T HAVE
                                <br/>
                                ANY PRODUCTS TO SHOW
                                </p>
                            </div>
                        </div>
                        <div class="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25">
                            <div class="w-full text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <p class="text-xl">
                                EMPTY SEARCH RESULT
                                <br/>
                                "<span class="font-semibold"></span>"
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-4 pb-3">
                            <div
                            role="button"
                            class="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
                            >
                                <img />
                                <div class="flex pb-3 px-3 text-sm -mt-3">
                                    <p class="flex-grow truncate mr-1" x-text="product.name"></p>
                                    <p class="nowrap font-semibold" x-text="priceFormat(product.price)"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductMode
