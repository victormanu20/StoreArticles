import React, { useContext } from 'react';
import {ProductCard} from '@components/ProductCard';
import { AppContext } from '@context/AppContext';
import {useGetProducts} from '@hooks/useGetProducts';
import styles from '@styles/HomeCards.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const HomeCards = () => {
    const products = useGetProducts(API);
    const {Category} = useContext(AppContext);
    

    if (Category==='all'){
        return (
            <div className={styles['cards-container']}>
                {products.map(product =>(
                    <ProductCard product={product} key={product.id}/>
                ))}
    
            </div>
        );
    }

    else{
        const ProductsFilter=products.filter(product=>{
            return product.category.name === Category ;
        });
            
        return (
            <div className={styles['cards-container']}>
                {ProductsFilter.map(product =>(
                    <ProductCard product={product} key={product.id}/>
                ))}
            </div>
        );
    };
};
export {HomeCards};