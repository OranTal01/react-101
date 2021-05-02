//dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//style
import './categories.style.scss';

//selectors
import { selectCategoriesSections } from '../../redux/categories/selectors';

//components
import CategoriesItem from '../categories-item/CategoriesItem';

const Categories = ({ categories }) => {
  return (
    <div className='categories-menu'>
      {categories.map(categorize => (
        <CategoriesItem key={categorize.id} categorize={categorize} />
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  categories: selectCategoriesSections(state),
});

export default connect(mapStateToProps)(Categories);
