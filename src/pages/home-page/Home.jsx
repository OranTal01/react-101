import React from 'react';

import './home.style.scss';

import Categories from '../../components/categories/Categories';

const Home = () => {
  return (
    <div className='homepage'>
      <Categories />
    </div>
  );
};

export default Home;
