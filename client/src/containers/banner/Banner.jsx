import './banner.scss'
import { BannerSvg } from '../../assets/svgs'

const Banner = () => {
  return (
    <section className='banner'>
      <div className="banner-content">
        <div className="banner-headings">
          <h1>Discover New Products</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, adipisci?</h2>
        </div>
        <div className="banner-connect">
          <button>
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="banner-img">
        <div className="banner-img-container">
          <BannerSvg />
        </div>
      </div>
    </section>
  )
}

export default Banner