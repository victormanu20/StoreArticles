import Head from 'next/head';
import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';
import {ItemCart} from '@components/ItemCart';

import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const SumItems = (item) => {
    const sum = item.cart.reduce((previousValue, currentValue) => previousValue + currentValue.price,0);
    return sum;
};
  return (
    <>
      <Head>
        <title> My Order</title>
      </Head>
      <section className={styles['my-order']}>
        <div className={styles['my-order-container']}>
          <h1 className={styles['title']}>My order</h1>
          <div className={styles['summary-orden']}>
            <div className={styles['order__price-items']}>
              <div className={styles['order__total-articles']}>
                <p>04.25.2021</p>
                <p>{state.cart.length} articles</p>
              </div>
              <p id="precio">$ {SumItems(state)}</p>
            </div>
            <ul className={styles['container-items']}>
              {state.cart.map(item =>(
                  <ItemCart item={item} key={`item-cart${item.id}`}/>
              ))}
            </ul>
          </div>
          <div className={styles['container-shoping']}></div>
        </div>
      </section>
    </>
  );
};

export default MyOrder;
