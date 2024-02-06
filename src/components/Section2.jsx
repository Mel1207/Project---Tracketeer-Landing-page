import React from 'react'
import { features } from '../constants'

const Section2 = () => {
  return (
    <div className='section-2'>
      <div className="container">
        Section2
        <div className="features">
          {features.map(item => (
            <div className='feature-card' key={item.id}>
              <img src={item.iconSrc} alt={item.title} />
              <p className='feature-title'>{item.title}</p>
              <p className='feature-text'>{item.text}</p>
            </div>
          ))}
        </div>
      </div> 
    </div>
  )
}

export default Section2