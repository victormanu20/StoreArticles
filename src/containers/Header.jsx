import React,{useState, useContext} from "react";
import icon_menu from '@icons/icon_menu.svg';
import logo_yard_sale from '@logos/logo_yard_sale.svg';
import icon_shopping_cart from '@icons/icon_shopping_cart.svg';

import {MenuDesktop} from '@containers/MenuDesktop';
import { ShoppingCart } from "./ShoppingCart";
import {MenuMobile} from '@containers/MenuMobile';
import {AppContext} from "../context/AppContext";

import Image from 'next/image';
import Link from "next/link";
import styles from "@styles/Header.module.scss";

const Header = () => {
  const [ToggleMenu, SetToggleMenu] = useState(false);
  const [ToogleOrders,SetToogleOrders] = useState(false);
  const [AsideMenuMobile, SetAsideMenuMobile] = useState(false);
  const {state,SetCategory} = useContext(AppContext);
  

  const handleToggle =() => {
    SetToggleMenu(!ToggleMenu);
  };

  const handleClickOrders = () => {
    SetToogleOrders(!ToogleOrders);
  };

  const HandleMenuMobile = () => {
    SetAsideMenuMobile(!AsideMenuMobile);
  };

  const HandleClickCategory = (nameCategory) =>{
    SetCategory(nameCategory);
  };

  return (
    <nav className={styles['header-nav']}>
      <div className={styles['menu-mobile']}>
        <Image src={icon_menu} alt="menu" onClick={HandleMenuMobile} layout='responsive'/>
      </div>
      <div className={styles['nav-left']}>
        <Link href="/">
          <Image src={logo_yard_sale} alt="logo" className={styles['nav-left__logo']} />
        </Link>
        <ul className={styles['ul-nav-left']}>
          <li className={styles['ul-nav-left__item']} >
            <button  className={styles['item__link-page']} onClick={()=>HandleClickCategory('all')}>All</button>
          </li>
          <li className={styles['ul-nav-left__item']}>
            <button  className={styles['item__link-page']} onClick={()=>HandleClickCategory('Clothes')}>Clothes</button>
          </li>
          <li className={styles['ul-nav-left__item']} >
            <button  className={styles['item__link-page']} onClick={()=>HandleClickCategory('Electronics')}>Electronics</button>
          </li>
          <li className={styles['ul-nav-left__item']} >
            <button  className={styles['item__link-page']} onClick={()=>HandleClickCategory('Furniture')}>Furnitures</button>
          </li>
          <li className={styles['ul-nav-left__item']} >
            <button  className={styles['item__link-page']} onClick={()=>HandleClickCategory('Shoes')}>Shoes</button>
          </li>
          <li className={styles['ul-nav-left__item']} >
            <button  className={styles['item__link-page']} onClick={()=>HandleClickCategory('Others')}>Others</button>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul className={styles['ul-nav-right']}>
          <li>
            <button className={styles['navbar-email']} onClick={handleToggle}>victordelga.98@gmail.com</button>
          </li>
          <li className={styles['navbar-shpping-cart']}>
            <Image src={icon_shopping_cart} alt="shopping cart" onClick={handleClickOrders} />
            {state.cart.length > 0 ?<div>{state.cart.length}</div> :null}
          </li>
        </ul>
      </div>
      {ToggleMenu && <MenuDesktop/>}
      {ToogleOrders && <ShoppingCart handleClickOrders={handleClickOrders}/>}
      {AsideMenuMobile && <MenuMobile/>}
      
    </nav>
  );
};
export {Header};

