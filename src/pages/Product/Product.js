import './Product.css'
import ProductCarousel from '../../Components/ProductCarousel'

function Product() {

  const product = {
    title: "Nike Air Max",
    price: "₹4,999",
    description: "Comfortable running shoes with modern design."
  }

  return (

    <div className='ProductPage'>

      {/* Left Side Carousel */}
      <div className='leftSide'>
        <ProductCarousel />
      </div>

      {/* Right Side Info */}
      <div className='rightSide'>

        <h1>{product.title}</h1>

        <h2>{product.price}</h2>

        <p>{product.description}</p>

        <button>Add To Cart</button>

      </div>

    </div>

  )
}

export default Product