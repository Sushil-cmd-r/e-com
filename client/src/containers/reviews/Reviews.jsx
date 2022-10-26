import './reviews.scss'
import { useState } from 'react';
import { Left, Right } from '../../assets/svgs'
import ReviewCard from '../../components/review/ReviewCard'

const Reviews = () => {
  const [current, setCurrent] = useState(2);
  const prevSlide = () => {
    setCurrent(prev => prev === 0 ? 4 : prev - 1)
  }

  const nextSlide = () => {
    setCurrent(prev => prev === 4 ? 0 : prev + 1)
  }

  return (
    <section className='reviews'>
      <div className="reviews-heading">
        What Our Users Say
      </div>
      <div className="reviews-cards">
        <Left className={`icon-left`} onClick={prevSlide} />
        {
          [...Array(5)].map((e, i) => (
            <ReviewCard key={i} index={i} current={current} />
          ))
        }
        <Right className={`icon-right`} onClick={nextSlide} />
      </div>
    </section>
  )
}

export default Reviews