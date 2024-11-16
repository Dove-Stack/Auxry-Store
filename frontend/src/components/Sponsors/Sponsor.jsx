import React from 'react'
import './Sponsor.css'
import { assets } from '../../assets/assets'

const Sponsor = () => {
  return (
    <div className='sponsor-main'>
        <img src={assets.pic_sponsor1} className='calvin' alt="" />
        <img src={assets.pic_sponsor2} alt="" />
        <img src={assets.pic_sponsor3} alt="" />
        <img src={assets.pic_sponsor4} alt="" />
        <img src={assets.pic_sponsor5} className='zara' alt="" />
    </div>
  )
}

export default Sponsor