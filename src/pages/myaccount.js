import React from 'react';
import  styles from '@styles/MyAccount.module.scss';
const MyAccount = () => {
    return (
        <main className={styles['login']}>
            <section className={styles['form-container']}>
                <div>
                    <h1 className={styles['title']}>My account</h1>
                    <form action="/" className={styles['form']}>
                        <label htmlFor="name" className={styles['label']}>Name</label>
                        <p className={styles['value']}>Victor Astudillo</p>
                        <label htmlFor="create-email" className={styles['label']}> Email address</label>
                        <p className={styles['value']}>victordelga.98@gmail.com</p>
                        <label htmlFor="create-password" className={styles['label']}> Password</label>
                        <p className={styles['value']}>12345678</p>
                    </form>
                </div>

            </section>
        </main>
    );
};

export default MyAccount;