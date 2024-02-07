import React from 'react'
import footerLogo from '../assets/footer-logo.svg'
import { fcommunity, flegal, fnavigation, footerLogos } from '../constants'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className='footer-col-1'>
            <img src={footerLogo} alt="Tracketeer logo" className='footer-logo'/>
            <p className='footer-text'>It is a long established fact that a reader <br /> will be distracted by the readable content <br /> of a page when looking at its layout.</p>
            <ul className='footer-socials'>
              {footerLogos.map(item => (
                <li key={item.id}>
                  <a href={item.linkPath} aria-label={item.title} target='_blank'>
                    <img src={item.iconSrc} alt={item.title} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer-col-2'>
            <div className='footer-links'>
              <p>Navigation</p>
              <ul>
                {fnavigation.map(item => (
                  <li key={item.id}>
                    <a href={item.linkSrc} aria-label={item.title}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-links'>
              <p>Community</p>
              <ul>
                {fcommunity.map(item => (
                  <li key={item.id}>
                    <a href={item.linkSrc} aria-label={item.title}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-links'>
              <p>Legal</p>
              <ul>
                {flegal.map(item => (
                  <li key={item.id}>
                    <a href={item.linkSrc} aria-label={item.title}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className='email-to'>Say Hello to tracketeers 👋 <a href="#!">hello@tracketeers.com</a></span>
          <span className='text-copyright'>Copyright @ tracketeers 2024</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer