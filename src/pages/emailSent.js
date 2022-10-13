import React from 'react';
import Link from 'next/link';
import email from '@icons/email.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import Image from 'next/image';

import styles from '@styles/EmailSent.module.scss';
const EmailSent = () => {
    return (
        <section className={styles['send-email']}>
            <div className={styles['container-email']}>
                <Image src={logo_yard_sale} alt="logo" className={styles['logo']} />
                <h1 className={styles['title']}>Email has been sent!</h1>
                <p className={styles['subtitle']}>Please check you inbox for instructions on how to reset the password</p>
                <div className={styles['container-logo-email']}>
                    <Image src={email} alt="logo-email" />
                </div>
                <button className={`${styles['primary-button']} ${styles['login-button']}`} >Login</button>
                <p className={styles['resend']}>
                    <span>Didnt receive the email?</span>
                    <Link href="/emailSent">Resend</Link>
                </p>
            </div>
        </section>

    );
};

export default EmailSent;