import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="hide-print flex flex-row h-screen antialiased text-blue-gray-800">
            { children }
        </div>
    )
}

export default Layout
