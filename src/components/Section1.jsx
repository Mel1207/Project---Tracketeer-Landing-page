import React from 'react'
import { organizations } from '../constants'

const Section1 = () => {
  return (
    <div className='section-1'>
      <p>Join us with a community of Tracketeer organizations</p>
      <div className='org-list'>
        {organizations.map(item => (
          <img key={item.id} src={item.imgSrc} alt={item.title} aria-label={item.title}/>
        ))}
      </div>
    </div>
  )
}

export default Section1