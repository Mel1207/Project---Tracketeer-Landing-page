import React from 'react'
import imgPhone from '../assets/img-phone.png'
import SectionHeader from './SectionHeader'

const Section3 = () => {
  return (
    <div className='section-3'>
      <div className="container">
        <SectionHeader 
          sub='benefits'
          title='Using our app will help you'
          layout='left'
          subTheme='th-green'
        >
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s</p>
        </SectionHeader>
        <img src={imgPhone} alt="" />
      </div>
    </div>
  )
}

export default Section3