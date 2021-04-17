import React, {useState, useEffect} from 'react'
import api from '../utils/api'
import {priceFormat} from '../utils/helper'

const ProductMode = (props) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(null)

    const { addToCart } = props

    useEffect(() => {
        const fetchData = async () => {
            const result = await api('/products')
            setProducts(result.data)
        }
        fetchData()
        // setProducts(result.data)
    }, [])

    return (
        <div className="flex-grow flex">
            <div className="flex flex-col bg-blue-gray-50 h-full w-full py-4">
                <div className="flex px-2 flex-row relative">
                    <div className="absolute left-5 top-3 px-2 py-2 rounded-full bg-cyan-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" className="bg-white rounded-3xl shadow text-lg full w-full h-16 py-4 pl-16 transition-shadow focus:shadow-2xl focus:outline-none" placeholder="Cari menu ..." />
                    </div>
                    <div className="h-full overflow-hidden mt-4">
                    <div className="h-full overflow-y-auto px-2">
                        
                        {/* Ini untuk kalo ga ada product sama sekali */}
                        { products.length === 0 &&
                        <div className="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25">
                            <div className="w-full text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                </svg>
                                <p className="text-xl">
                                YOU DON'T HAVE
                                <br/>
                                ANY PRODUCTS TO SHOW
                                </p>
                            </div>
                        </div>
                        }

                        {/* Ini untuk jika hasil pencarian kosong */}
                        { ( products.filter((data)=>{
                                if(search == null)
                                    return data
                                else if(data.name.toLowerCase().includes(search.toLowerCase())){
                                    return data
                                }
                            }).length === 0 && search != null) &&
                            <div className="select-none bg-blue-gray-100 rounded-3xl flex flex-wrap content-center justify-center h-full opacity-25">
                                <div className="w-full text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <p className="text-xl">
                                    EMPTY SEARCH RESULT
                                    <br/>
                                    "<span className="font-semibold"></span>"
                                    </p>
                                </div>
                            </div>
                        }

                        {/* Ini untuk list product */}
                        <div className="grid grid-cols-4 gap-4 pb-3">
                            { products.filter((data)=>{
                                    if(search == null)
                                        return data
                                    else if(data.name.toLowerCase().includes(search.toLowerCase())){
                                        return data
                                    }
                                }).map(item => (
                                <div onClick={() => addToCart(item)} key={item.id} role="button" className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg" >
                                    <img src={item.image} alt={item.name} />
                                    <div className="flex pb-3 px-3 text-sm -mt-3">
                                        <p className="flex-grow truncate mr-1">{ item.name }</p>
                                        <p className="nowrap font-semibold">{ priceFormat(item.price) }</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductMode
