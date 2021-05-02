//dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

//style
import './categories-item.style.scss';

const CategoriesItem = ({ categorize, match, history }) => {
  const { title, size, imageUrl, linkUrl } = categorize;
  return (
    <div
      className={`categories-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

CategoriesItem.propTypes = {
  categorize: PropTypes.object.isRequired,
};

export default withRouter(CategoriesItem);
