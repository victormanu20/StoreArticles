import React from 'react';
import styles from '@styles/MenuMobile.module.scss';
import Link from 'next/link';

const MenuMobile = () => {
    return (
        <div className={styles['mobile-menu']}>
            <ul className={styles['list-productos']}>
                <li>
                    <Link href="/">CATEGORIES</Link>
                </li>
                <li>
                    <Link href="/">All</Link>
                </li>
                <li>
                    <Link href="/">Clothes</Link>
                </li>
                <li>
                    <Link href="/">Electronics</Link>
                </li>
                <li>
                    <Link href="/">Furnitures</Link>
                </li>
                <li>
                    <Link href="/">Toys</Link>
                </li>
                <li>
                    <Link href="/">Others</Link>
                </li>
            </ul>
            <ul className={styles['my-account']}>
                <li>
                    <Link href="/">My orders</Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
            </ul>
            <ul className={styles['email']}>
                <li className={styles['ul-email__item']}>
                    <Link href="/">victordelga@.gmail.com</Link>
                </li>
                <li className={styles['ul-email__item']}>
                    <Link href="/">Sign Out</Link>
                </li>
            </ul>
        </div>

    );
};

export {MenuMobile};