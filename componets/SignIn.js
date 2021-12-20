import React, { useState, useEffect } from 'react'
import Styles from '../styles/signIn.module.css'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'



export default function SignIn() {

    const router = useRouter();
    const [user, setUser] = useState({
        mail: '',
        password: '',
    })

    const handleChange = e => {


        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }



    const submit = () => {
        // const { user, loading } = useUser()
        axios.post('http://localhost:5001/login', user)

            .then(res => {
                console.log(res);
                console.log(user);
                if (user.mail === '' && user.password === '') {
                    router.push('/signIn')
                } else {
                    router.push('/home')
                }
            })



    }
    return (
        <div className={Styles.container}>
            <div className={Styles.containerRegistration}>
                {/* Start tick image container */}
                <div className={Styles.tickSign}>
                    <div></div>
                </div>

                {/* End tick image*/}
                {/* Start register container*/}
                <div className={Styles.registerContainer}>
                    <div className='image'><Image src="/add.png" width={20} height={20} /></div>
                    <h5 className='textTitle'>Register</h5>
                    <p className='textDetails'>Browse and find what you need</p>
                </div>

                {/* End register container*/}

                {/* Start login container*/}
                <div className={Styles.loginContainer}>
                    <div className='image'><Image src="/login.png" width={20} height={20} /></div>
                    <h5 className='textTitle'>Sign in</h5>
                    <p className='textDetails'>Already have an account, then welcome back</p>
                </div>
                {/* End register container*/}

            </div>
            <form>
                {console.log('User', user)}
                <input type='mail'
                    placeholder='E-mail*'
                    name='mail'
                    value={user.mail} onChange={handleChange} />
                <input type='password'
                    placeholder='Password*' name='password'
                    value={user.password} onChange={handleChange} />
                <button type='button' onClick={submit}>Submit</button>
            </form>
        </div>
    )
}
