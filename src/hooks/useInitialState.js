import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [Category, SetCategory] = useState('all');

  const addtocart = (product) => {
    setState({
      ...state,
      cart: [...state.cart, product],
    });
  };
  const removeItemCart = (item) => {
    setState({
      ...state,
      cart: state.cart.filter((ItemCart) => ItemCart.id != item.id),
    });
  };

  return {
    state,
    addtocart,
    removeItemCart,
    Category,
    SetCategory,
  };
};

export { useInitialState };
