import { useState } from 'react'

export default function Main({ image, issue, backgroundColor }) {
  // const [main, setMain] = useState(false)

  // function changeBackground(){
  //   console.log(window.scrollY)
  //   if(window.scrollY >= 1000){
  //     setMain(true)
  //   }else{
  //     setMain(false)
  //   }
  // }

  // addEventListener('scroll', changeBackground)

  // {main ? 'main active' : 'main'} style={{ backgroundColor: main && backgroundColor}}

  return (
    <div className='main'>
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
