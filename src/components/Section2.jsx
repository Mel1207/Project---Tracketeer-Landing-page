import React from 'react'
import { features } from '../constants'
import SectionHeader from './SectionHeader'

const Section2 = () => {
  return (
    <div className='section-2'>
      <div className="container">
        <SectionHeader 
          sub='features' 
          title='Track easy with simple features'
          layout='center'
          subTheme='th-blue'
        >
          <p>We craft the simplest feature that you need so you can monitor your <br /> finances and you can focus on improving your daily needs</p>
        </SectionHeader>
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