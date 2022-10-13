import React from 'react';

import styles from '@styles/CreateAccount.module.scss';
import Link from 'next/link';

const CreateAccount = () => {
    return (
        <section className={styles['login']}>
            <div className={styles['form-container']}>
                <div>
                    <h1 className={styles['title']}>My account</h1>
                    <form action="/" className={styles['form']}>
                        <label htmlFor="name" className={styles['label']}>Name</label>
                        <input type="text" name="create-name" id="name" placeholder="name" className={`${styles['input']} ${styles['input-create-name']}`} />
                        <label htmlFor="create-email" className={styles['label']}> Email address</label>
                        <input type="email" name="email-adress" id="create-email" placeholder="correo@example.com" className={`${styles['input']} ${styles['input-create-email']}`}/>
                        <label htmlFor="create-password" className={styles['label']}> Password</label>
                        <input type="password" name="password" id="create-password" placeholder="******" className={`${styles['input']} ${styles['input-create-password']}`}/>
                    </form>
                </div>
                <div>
                    <Link href='/login'>
                        <button className={`${styles['primary-button']} ${styles['create-account-button']}`}>Create</button>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default CreateAccount;