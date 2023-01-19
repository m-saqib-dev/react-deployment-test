import React from 'react'
import './card.scss'
import img from './download.jpg'

const Card = ({className}) => {
  return (
    <div className={className}>
    <div className={'card' }>
    <section className='card-body'>
        <h1 className='title'>Mountain</h1>
        <p className='desc'>This moutain is mountain.</p>
        <div className="img-container">
            <div className="shadow"></div>
        <img src={img} alt="" srcset="" />
        </div>
        <div className="drawer-eff"></div>
        <button className='btn btn-card'>See more details</button>
    </section>
        <div className="card-line"></div>
    </div>
    </div>
  )
}

export default Card