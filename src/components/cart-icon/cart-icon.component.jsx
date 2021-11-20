import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);
  const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());

  return (
    <CartIconContainer onClick={toggleCartHiddenClickHandler}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
