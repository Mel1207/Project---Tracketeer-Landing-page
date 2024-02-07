import React from 'react'

const SectionHeader = ({sub, subTheme, title, children, layout}) => {
  return (
    <div className={`section-header ${layout === 'center' ? 'ly-center' : ''} ${layout === 'left' ? 'ly-left' : ''} ${layout === 'right' ? 'ly-right' : ''}`}>
      <span className={`section-sub ${subTheme === 'th-blue' ? 'theme-blue' : ''} ${subTheme === 'th-green' ? 'theme-green' : ''} ${subTheme === 'th-red' ? 'theme-red' : ''} ${subTheme === 'th-white' ? 'theme-white' : ''}`}>{sub}</span>
      <h3 className='section-title'>{title}</h3>
      {children}
    </div>
  )
}

export default SectionHeader