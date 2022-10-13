import React from 'react';
import styles from '@styles/DescriptionProduct.module.scss';

const DescriptionProduct = ({title,price}) => {
    return (
        <div className={styles['precio-descripcion']}>
            <p>$ {price}</p>
            <p>{title}</p>
        </div>
    );
};

export {DescriptionProduct};