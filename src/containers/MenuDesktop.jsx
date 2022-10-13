import React from 'react';
import styles from '@styles/MenuDesktop.module.scss';
import Link from 'next/link';

const MenuDesktop = () => {
    return (
        <div className={styles['desktop-menu']} id='Menu-open'>
            <ul>
                <li>
                    <Link href="/myorder" >My orders</Link>
                </li>
                <li>
                    <Link href="/myaccount">My aacount</Link>
                </li>
                <li>
                    <Link href="/login">Sign Out</Link>
                </li>
            </ul>
        </div>

    );
};

export {MenuDesktop};