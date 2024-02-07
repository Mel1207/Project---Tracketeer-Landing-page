import React from 'react'
import imgPhone from '../assets/img-phone.png'
import SectionHeader from './SectionHeader'
import { benefits } from '../constants'

const Section3 = () => {
  return (
    <div className='section-3'>
      <div className="container">
        <div>
          <SectionHeader 
            sub='benefits'
            title='Using our app will help you'
            layout='left'
            subTheme='th-green'
          >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s</p>
          </SectionHeader>
          <div className='benefits'>
            {benefits.map(list => (
              <ul key={list.id}>
                {list.benefit.map(item => (
                  <li key={item.id}>
                    <img src={item.iconSrc} alt="check" />
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <img src={imgPhone} alt="" className='section-right'/>
      </div>
    </div>
  )
}

export default Section3