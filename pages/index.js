
import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => (
  <div>
    <no banner/>

    <div className="products-heading">
      <h2>COINS</h2>
    </div>

    <div className="products-container">
    {['Product 1', ' Product 2', 'Product 3', ' Product 4', 'Product 5', ' Product 6'].map(      
    (product) => product)}     
    </div>





    <div className="products-heading">
      <h2>PRINTS</h2>
    </div>

    <div className="products-container">
    {['Product 1', ' Product 2', 'Product 3', ' Product 4', 'Product 5', ' Product 6'].map(      
    (product) => product)}     
    </div>


    <no banner/>
  </div>
);

export default Home;