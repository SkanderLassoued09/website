import React from 'react'
import Styles from '../styles/footer.module.css'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className={Styles.footer}>
            <div className='logoFooter'><Image src="/logo.png" width={150} height={150} /></div>
            <div className='rights'> © All Rights Reserved </div>

        </div>
    )
}


















/**
 * 1- Add logo style
 * 2- finish footer
 * 3- finish Sign in
 * 4- finish Sign up 
 * 5- finsh home page
 * => Take a break 
 * 6- Create node js mongoos
 * -> Authentification 
 */