import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
import flechita from '@icons/flechita.svg';
import {ItemCart} from '@components/ItemCart';

import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/ShoppingCart.module.scss';

const ShoppingCart = ({handleClickOrders}) => {
    const {state} = useContext(AppContext);
    const SumItems = (item) => {
        const sum = item.cart.reduce((previousValue, currentValue) => previousValue + currentValue.price,0);
        return sum;
    };
    return (
        <section className={styles['container-cart']}>
            <nav className={styles['encabezado']}>
                <Image src={flechita} alt='desktop' className={styles['desktop']}  onClick={handleClickOrders}/>
                <h2>Shoping cart</h2>
            </nav>
            <ul className={styles['container-items']}>
                {state.cart.map(item =>(
                    <ItemCart item={item} key={`item-cart${item.id}`}/>
                ))}
            </ul>
            <footer className={styles['total-items']}>
                <div className={styles['price-total']}>
                    <p>Total</p>
                    <p>$ {SumItems(state)}</p>
                </div>
                <Link  href='/myorder' > 
                    <p className={styles['primary-button']}>Checkout</p>
                </Link>
            </footer>
        </section>

    );
};
export {ShoppingCart};