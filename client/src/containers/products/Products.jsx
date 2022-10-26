import './products.scss'
import Product from '../../components/product/Product'
import { products } from '../../constants/products'

const Products = () => {
  return (
    <section className='products' id='products'>
      <div className="products-heading">
        You May Like...
      </div>
      <div className="products-list">
        {products.map((elm, idx) => (
          < Product key={idx} data={elm} />
        ))}
      </div>
    </section>
  )
}

export default Products