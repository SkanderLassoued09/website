import React from 'react'
import Above_navbar from './Above_navbar'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Layout({ children }) {
    return (
        <div className='content'>

            <Above_navbar />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
