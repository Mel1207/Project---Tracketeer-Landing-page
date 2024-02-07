import React from 'react'
import SectionHeader from './SectionHeader'
import Marquee from "react-fast-marquee"
import { testimonialsRow1 } from '../constants'

const Section4 = () => {
  return (
    <div className='section-4'>
      <SectionHeader sub='community' subTheme='th-red' layout='center' title='Join over 1 million tracketeers'>
        <p>More and more tracketeers enjoy managing their finances <br />while saving and becoming financially free</p>
      </SectionHeader>
      <div className='testimonials'>
        <Marquee pauseOnHover='true'>
          {testimonialsRow1.map(item => (
            <div className="testimonial-card" key={item.id}>
              <p className='testimonial-text'>{item.cardText}</p>
              <div className="client-details">
                <img src={item.cardAvatar} alt={item.clientName} className='client-avatar'/>

                <div>
                  <p>{item.clientName}</p>
                  <span>{item.clientPosition}</span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
        <Marquee direction='right' pauseOnHover='true'>
          {testimonialsRow1.map(item => (
            <div className="testimonial-card" key={item.id}>
              <p className='testimonial-text'>{item.cardText}</p>

              <div className="client-details">
                <img src={item.cardAvatar} alt={item.clientName} className='client-avatar'/>
                <div>
                  <p>{item.clientName}</p>
                  <span>{item.clientPosition}</span>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Section4