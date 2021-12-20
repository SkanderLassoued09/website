import Link from 'next/link'
import React from 'react'
import Styles from '../styles/above_navbar.module.css'

export default function Above_navbar() {
    return (
        <div className={Styles.aboveNavabar}>
            <ul className={Styles.ul}>
                <li className={Styles.li}><Link href='/signIn'><a>Sign in</a></Link></li>
                <li className={Styles.li} ><Link href='/signUp'><a>Register</a></Link></li>
            </ul>
        </div>
    )
}
