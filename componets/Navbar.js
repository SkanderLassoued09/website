import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Styles from '../styles/navbar.module.css'

export default function Navbar() {
    return (
        <nav className={Styles.nav}>

            <ul>
                <li> <Link href='/home'><a><Image src="/logo.png" width={70} height={70} /></a></Link></li>
                <li> <Link href='/home'><a>Home</a></Link></li>
                <li> <Link href='/about'><a>About us</a></Link> </li>
                <li> <Link href='/contact'><a>Contact us</a></Link> </li>
            </ul>
            <div >Ar</div>


        </nav>
    )
}
