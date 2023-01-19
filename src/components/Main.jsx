import React from 'react'
import data from '../data'

export default function Main({image, issue, backgroundColor}) {


  return (
    <div className='main' style={{backgroundColor}}>
      <div className='main-wrapper'>
        <img className='cover' src={image} />
        <div className='main-cover-text'>
          <span className='issue-num'>Issue #{issue}</span>
          <span className='buy-here'><a href='#'>Buy here</a></span>
          <span className=''>or in <a href='#'>selected stores.</a></span>
        </div>
      </div>      
    </div >
  )
}
