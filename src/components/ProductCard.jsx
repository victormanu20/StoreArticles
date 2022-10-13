import React,{useContext} from 'react';
import {DescriptionProduct} from './DescriptionProduct';
import {AppContext} from '../context/AppContext';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';

import Image from 'next/image';
import styles from '@styles/ProductCard.module.scss';

const ProductCard = ({product}) => {
    const {addtocart} = useContext (AppContext);
    const OnClickToCart = (item) => {
        addtocart(item);
    };
    return (
        <div className={styles['product-card']}>

            <Image src={product.images[0]} alt={product.title} className={styles['prduct-image']} width="100%" height="100%" layout="responsive" />
            <div className={styles['product-info']}>
                <DescriptionProduct title={product.title} price={product.price}/>
                <button onClick={()=>OnClickToCart(product)} className={styles['btn-add__cart']}>
                    <Image src={bt_add_to_cart} alt='add to cart' className={styles['btn-add__cart--image']} />
                </button>
            </div>
        </div>
    );
};

export {ProductCard};
