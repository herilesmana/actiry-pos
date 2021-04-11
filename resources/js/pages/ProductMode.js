
const ProductMode = () => {
    return (
        <div className="flex-grow flex">
            <div className="flex flex-col bg-blue-gray-50 h-full w-full py-4">
                <div className="flex px-2 flex-row relative">
                    <div className="absolute left-5 top-3 px-2 py-2 rounded-full bg-cyan-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" className="bg-white rounded-3xl shadow text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none" placeholder="Cari menu ..." />
                    </div>
                    <div className="h-full overflow-hidden mt-4">
                    <div className="h-full overflow-y-auto px-2">
                        <div className="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25">
                            <div className="w-full text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                                <p className="text-xl">
                                YOU DON'T HAVE
                                <br/>
                                ANY PRODUCTS TO SHOW
                                </p>
                            </div>
                        </div>
                        <div className="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25">
                            <div className="w-full text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <p className="text-xl">
                                EMPTY SEARCH RESULT
                                <br/>
                                "<span className="font-semibold"></span>"
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 pb-3">
                            <div
                            role="button"
                            className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
                            >
                                <img />
                                <div className="flex pb-3 px-3 text-sm -mt-3">
                                    <p className="flex-grow truncate mr-1" x-text="product.name"></p>
                                    <p className="nowrap font-semibold" x-text="priceFormat(product.price)"></p>
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
