import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddButton,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  const addItemHandler = (item) => dispatch(addItem(item));
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItemHandler(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
