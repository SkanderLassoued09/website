import React from 'react'
import Styles from '../styles/home.module.css'

export default function Home() {
    return (
        <div className={Styles.container}>
            <div className={Styles.containerLogo}>
                <div className={Styles.orange}></div>
                <div className={Styles.blue}></div>
            </div>
            <h3>The Logo Above is Made in Pure CSS</h3>

        </div>
    )
}
