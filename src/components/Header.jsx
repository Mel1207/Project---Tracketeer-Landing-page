import React from 'react'
import imgDesktop from '../assets/img-desktop.png'
import imgIncomeCard from '../assets/img-total-income.png'
import imgLayer2 from '../assets/img-object-2.png'
import imgLayer1 from '../assets/img-object-1.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <h1>Seamless <span className='text-green'>Track</span> your <span className='text-blue'>Financials</span> <br /> for your <span className='text-red'>Lifestyle</span> needs</h1>
        <p>There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form</p>
        <div className='header-cta'>
          <a href="#!" className='btn-md btn-primary'>Get Started</a>
          <a href="#!" className='btn-md btn-primary-outline'>Learn More</a>
        </div>

        <div className="header-bottom">
          <img src={imgDesktop} alt="Dashboard" className='desktop'/>
          <img src={imgIncomeCard} alt="Income Card" className='income-card'/>
          <img src={imgLayer1} alt="Layer 1" className='layer-1'/>
          <img src={imgLayer2} alt="Layer 2" className='layer-2'/>
        </div>
      </div>
    </div>
  )
}

export default Header