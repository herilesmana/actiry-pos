import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import ProductMode from './pages/ProductMode'

const App = () => {

    const [cartItems, setCartItems] = useState([])

    const playSound = (src) => {
        let sound = new Audio();
        sound.src = src;
        sound.play();
        sound.onended = () => sound = null;
    }

    const beep = () => {
        playSound("sound/beep-29.mp3");
    }

    const clearSound = () => {
        playSound("sound/button-21.mp3");
    }

    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + (item['qty']*item['price'] || 0), 0
        )
    }

    const addToCart = (product) => {
        const exist = cartItems.find((item) => item.id === product.id)

        if(exist) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item 
                )
            )
        }else{
            setCartItems([...cartItems, {...product, qty: 1}])
        }

        beep();
    }

    const removeFromCart = (product) => {
        const exist = cartItems.find((item) => item.id === product.id)
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id))
            clearSound()
        }else{
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item 
                )
            )
            beep()
        }
    }

    const clearCart = () => {
        setCartItems([])
        clearSound()
    }

    return (
        <>
            <Layout>
                <LeftSidebar />
                <ProductMode addToCart={addToCart} />
                <RightSidebar clearCart={clearCart} removeFromCart={removeFromCart} addToCart={addToCart} cartItems={cartItems} getTotalPrice={getTotalPrice} />
            </Layout>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)