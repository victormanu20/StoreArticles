import React from 'react';
import Link from 'next/link';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import Image from 'next/image';

import styles from '@styles/CreatePassword.module.scss';
const CreatePassword = () => {
    return (
        <section className={styles['login']}>
            <div className={styles['form-container']}>
                <Image src={logo_yard_sale} alt="logo" className={styles['logo']} />
                <h1 className={styles['title']}>Create a new password</h1>
                <p className={styles['subtitle']}> Enter a new password for you account</p>
                <form action="/" className={styles['form']}>
                    <label htmlFor="password" className={styles['label']}>password</label>
                    <input type="password" name="password" id="password" placeholder="******" className={`${styles['input']} ${styles['input-password']}`} />
                    <label htmlFor="new-password" className={styles['label']}> New password</label>
                    <input type="password" name="new-password" id="new-password" placeholder="******" className={`${styles['input']} ${styles['input-new_password']}`} />
                    <Link href='/emailSent'>
                        <input type="submit" defaultValue="Confirm" className={`${styles['primary-button']} ${styles['login-button']}`} />
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default CreatePassword;
