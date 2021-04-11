import React from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/Layout'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import ProductMode from './pages/ProductMode'

const App = () => {
    return (
        <>
            <Layout>
                <LeftSidebar />
                <ProductMode />
                <RightSidebar />
            </Layout>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)