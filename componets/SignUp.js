import React, { useState } from 'react'
import Styles from '../styles/signUp.module.css'
import axios from 'axios'
import Image from 'next/image'

export default function SignUp() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        mail: '',
        password: '',
        rePassword: ''
    })

    const handleChange = e => {
        e.preventDefault()

        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const submit = () => {
        const { firstName, lastName, mail, password, rePassword } = user
        if (firstName && lastName && mail && (password === rePassword)) {
            axios.post('http://localhost:5001/register', user)
                .then(res => alert(res.data.message))

        } else {
            alert('ERROR')
        }
    }


    return (
        // Start Container 

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



            {/* Start the form */}
            <form >

                <div className={Styles.name}>
                    <input type='text'
                        placeholder='First  Name*'
                        name='firstName'
                        value={user.firstName} onChange={handleChange} />
                    <input type='text'
                        placeholder='Last  Name*'
                        name='lastName'
                        value={user.lastName} onChange={handleChange} />
                </div>
                <input type='email' placeholder='E-mail*' name='mail' value={user.mail} onChange={handleChange} />
                <input type='password' placeholder='Password*' name='password' value={user.password} onChange={handleChange} />
                <input type='password' placeholder='Repeat password*' name='rePassword' value={user.rePassword} onChange={handleChange} />
                <button type='button' onClick={submit} >Submit</button>
            </form>
            {/* end the form */}
        </div>
    )
}
