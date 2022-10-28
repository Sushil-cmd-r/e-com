import './products.scss'
import Product from '../../components/product/Product'
import { products } from '../../constants/products'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section className='products' id='products'>
      <div className="products-heading">
        You May Like...
      </div>
      <div className="products-list">
        {products.map((elm, idx) => (
          <Link to='/:id' className='link' key={idx}>
            < Product data={elm} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Products