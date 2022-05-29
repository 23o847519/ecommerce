import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="products-heading">
        <h2>BFAC Coin and mintage</h2>
        <p>All Your Waifu Coin needs</p>

        <div className="products-container">
          {['Product 1', 'Product 2'].map(
          (product) => product)}
        </div>
      </div>
      Footer
    </>
  )
}

export default Home