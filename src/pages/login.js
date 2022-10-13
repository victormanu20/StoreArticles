import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo_yard_sale from '@logos/logo_yard_sale.svg';

import styles from '@styles/Login.module.scss';

const Login = () => {
    return (
    <section className={styles['login']}>
        <div className={styles['container-login']}>
            <Image src={logo_yard_sale} alt="logo" className={styles['logo']}/>
            <div  className={styles['form-login']} >
                {/* <!--email address--> */}
                <label htmlFor="email-adress" className={styles['label']}>email address</label>
                <input type="text" name='email' id="email-adress" className={`${styles['input']} ${styles['input-email']}`}  placeholder="correo.@gmail.com" />
                {/* <!--escribir contraseña--> */}
                <label htmlFor="password" className={styles['label']}>Password</label>
                <input type="password" id="password" name='password' className= {`${styles['input']} ${styles['input-password']}`} placeholder="******" />
                <Link href='/'>
                    <button className={`${styles['primary-button']} ${styles['login-button']}`} >
                        Log in
                    </button>
                </Link>
                <Link href="/createPassword">
                    <p className={styles['forgot-password']}>Forgot my password</p> 
                </Link>
            </div>
                <Link href='/createAccount'>
                    <button className= {`${styles['secundary-button']} ${styles['Sign-button']}`}>
                        Sign Up
                    </button>             
                </Link>
        </div>
    </section>
    );
};

export default Login;