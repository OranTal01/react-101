import React, { Component } from 'react';

import './categories.style.scss';

import CategoriesItem from '../categories-item/CategoriesItem';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className='categories-menu'>
        {this.state.categories.map(categories => (
          <CategoriesItem key={categories.id} categories={categories} />
        ))}
      </div>
    );
  }
}

export default Categories;
