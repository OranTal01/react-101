//dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//style
import './collection-item.style.scss';

//components
import CustomButton from '../custom-button/CustomButton';

//actions
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
