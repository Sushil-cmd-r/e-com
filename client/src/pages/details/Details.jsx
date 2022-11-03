import './details.scss'
import { bag } from '../../assets/images'
import { AuthContext, ModalContext } from '../../context/'
import { useContext } from 'react'

const Details = () => {
  const { auth } = useContext(AuthContext)
  const { setMessage, open } = useContext(ModalContext)

  const handleBuy = () => {
    if (!auth.user) {
      setMessage('Please Log In First')
      open()
    }
  }

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
          <button className="buy" onClick={handleBuy}>
            Buy Now
          </button>
        </div>
      </div>
    </main>
  )
}

export default Details