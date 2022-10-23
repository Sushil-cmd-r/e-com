import './home.scss'
import { Banner, Filter, Reviews } from '../../containers'

const Home = () => {
  return (
    <main className='home'>
      <Banner />
      <Filter />
      <Reviews />
    </main>
  )
}

export default Home