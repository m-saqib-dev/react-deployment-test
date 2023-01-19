import React from 'react'
import './card2.scss'

const Card2 = ({imageURL,title, category, isSelected,description,backgroundColor}) => {
  return (
    <div className="card-wrapper">
        <section className="card" onClick={isSelected}>
          <header className="title-container">
            <span className='category'>{category}</span>
            <h2>{title}</h2>
            <div className="image" style={{backgroundColor:`${backgroundColor}`}}>
            <img src={imageURL} alt="" srcset="" />
            </div>
          </header>
          <p className='description'>{description}</p>
        </section>
    </div>
  )
}

export default Card2