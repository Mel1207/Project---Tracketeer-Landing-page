import React from 'react'
import SectionHeader from './SectionHeader'
import imgLaptop from '../assets/img-laptop.png'

const Section6 = () => {
  return (
    <div className='section-6'>
      <div className="container">
        <div className="newsletter-section">
          <SectionHeader 
            sub='newsletter' 
            subTheme='th-white' 
            title='Subscribe to our news letter'
            layout='center'
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry printing and typesetting industry</p>

            <a href="#!" className='btn-md btn-secondary'>Subscribe</a>
          </SectionHeader>
          <img src={imgLaptop} alt="laptop" className='laptop'/>
        </div>
      </div>
    </div>
  )
}

export default Section6