import React from 'react'
import './reviewCard.scss'

const Review = ({ index, current }) => {
  return (
    <article className={`reviewCard reviewCard-${index - current}`}>
      <div className="reviewCard-container">
        <h1 className="review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis alias ex obcaecati quam dolor amet minus itaque. Illum, optio quam dolores.
        </h1>
        <h2 className="reviewer">- Reviewer Name</h2>
        <p className="position">Review Position</p>
      </div>
    </article>
  )
}

export default Review