import React,{useContext} from 'react';
import icon_close from '@icons/icon_close.png';
import { AppContext } from '../context/AppContext';

import styles from '@styles/ItemCart.module.scss';
import Image from 'next/image';
const ItemCart = ({item}) => {
    const {removeItemCart} = useContext(AppContext);
    const HandleRemoveItem = () =>  {
        removeItemCart(item);
    };
    return (
        <li className={styles['item']}>
            <Image src={item.images[0]} alt={item.title} width="100%" height="100%" />
            <p>{item.title}</p>
            <p>$ {item.price}</p>
            <Image src={icon_close} alt="close"  onClick={() => HandleRemoveItem()}/>
        </li>
    );
};

export {ItemCart};