//dependencies
import React from 'react';
import PropTypes from 'prop-types';

//style
import './categories.style.scss';

//selectors
import { selectCategoriesSections } from '../../redux/categories/selectors';

import CategoriesItem from '../categories-item/CategoriesItem';
import { connect } from 'react-redux';

const Categories = ({ categories }) => {
  return (
    <div className='categories-menu'>
      {categories.map(categories => (
        <CategoriesItem key={categories.id} categories={categories} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  categories: selectCategoriesSections(state),
});

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Categories);
