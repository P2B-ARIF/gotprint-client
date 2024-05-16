import React from 'react'
import card from './../../../assets/demo/card2.jpg'

const Hero = () => {
  return (
    <div className='h-[340px] w-full'>
        <img src={card} alt="" className='h-full w-full object-cover' />
    </div>
  )
}

export default Hero