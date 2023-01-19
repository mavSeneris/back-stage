import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-text-wrapper'>
          <p>Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk. </p>
          <small>2023 <a className='footer-links' href='#'>Published by Maverick</a></small>
          <div className='privacy'>
            <a className='footer-links' href='#'>Privacy Policy</a>
          </div>
        </div>
        <div className='issue-container'>
          <span>Issue #6</span>
          <span>Issue #5</span>
          <span>Issue #4</span>
          <span>Issue #3</span>
          <span>Issue #2</span>
          <span>Issue #1</span>

        </div>
      </div>
    </div>
  )
}
