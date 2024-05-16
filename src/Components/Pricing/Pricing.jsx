import React from 'react'
import './Pricing.css'
import { pricing } from '../Assets/data'

const Pricing = () => {
  return (
    <div>
        <div className="price_container">
            <div className="heading">
                <p>PRICING</p>
                <h2>Our pricing plans</h2>
            </div>
            <div className="wrapper">
            {pricing.map(({plan, price}) => (
                <div key={index} className="plan">
                <h2>{plan}</h2>
                <p>{price}</p>
            <ul>
                {features.map(({feature}) => (
                <li key={feature.feature}>{feature}</li>
                ))}
            </ul>
          <button>Choose Plan</button>
        </div>
      ))}
            </div>
        </div>
    </div>
  )
}

export default Pricing