import './details.scss'
import { bag } from '../../assets/images'

const Details = () => {
  return (
    <main className='details'>
      <div className="details-container">
        <div className="details-image">
          <img src={bag} alt="bag" />
        </div>
        <div className="details-info">
          <div className="detail">
            <span className="key">
              Product Name:
            </span>
            <span className="value">
              Bag
            </span>
          </div>
          <div className="detail">
            <span className="key">
              Description:
            </span>
            <span className="value description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, sequi?
            </span>
          </div>
          <div className="detail">
            <span className="key">
              Price:
            </span>
            <span className="value">
              200
            </span>
          </div>
          <button className="buy">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  )
}

export default Details