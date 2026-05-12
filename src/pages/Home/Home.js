import './Home.css'

import React, { useEffect, useState } from 'react'
import Carousel from '../../Components/Carousel/Carousel';
import Categorycard from '../../Components/Categorycard';
import axios from 'axios';
import Productcard from '../../Components/Productcard';

function Home() {

  const [storeProducts, setStoreProducts] = useState([])

  useEffect(() => {

    async function getProducts() {

      try {

        let k = await axios.get('https://dummyjson.com/products')

        console.log(k.data);

        setStoreProducts(k.data.products);

      } catch (err) {

        console.log(err);

      }

    }

    getProducts();

  }, [])

  return (
    <>
      <Carousel />

      <div>
        <h2>Categories</h2>

        <div className='d-flex justify-content-start column-gap-3'>
          <Categorycard />
          <Categorycard />
          <Categorycard />
          <Categorycard />
        </div>

      </div>

      <div>
        <h1>Products</h1>

        <div className='d-flex flex-wrap gap-3'>

          {storeProducts && storeProducts.length > 0 &&
            storeProducts.map((product) => {
              return (
                <Productcard
                  key={product.id}
                  product={product}
                />
              )
            })
          }

        </div>

      </div>
    </>
  )
}

export default Home;