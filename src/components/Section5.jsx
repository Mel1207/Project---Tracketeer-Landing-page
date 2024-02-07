import React from 'react'
import SectionHeader from './SectionHeader'
import { articles } from '../constants'
import iconNext from '../assets/icon-next.svg'

const Section5 = () => {
  return (
    <div className='section-5'>
      <div className="container">
        <SectionHeader sub='articles' subTheme='th-green' layout='center' title='Its all about tracketeer articles'>
          <p>If you are going to use a passage of Lorem Ipsum, you need to be sure <br /> there isn't anything embarrassing hidden in the middle of text.</p>
        </SectionHeader>
        <div className='articles'>
          {articles.map(item => (
            <div key={item.id} className='article'>
              <img src={item.imgSrc} alt={item.title} aria-label={item.title} className='article-img'/>
              <p className='article-title'>{item.title}</p>
              <span className='article-date'>{item.date}</span>
              <a href="#!" className='article-link'>
                Read Article
                <img src={iconNext} alt="next" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section5