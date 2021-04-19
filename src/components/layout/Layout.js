import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            <main className="container min-h-screen">{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout
