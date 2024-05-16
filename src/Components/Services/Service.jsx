import React from 'react'
import './Service.css'
import { services } from '../Assets/data'

const Service = () => {
  return (
    <div>
        <div className="service" id='service'>
            <div className="service_header">
            <h1>Our Services</h1>
            <p>The service we offer is specifically designed to meet your needs</p>
            </div>
            <div className="service_container">
                {services.map(({icon, head, desc, action, link}) =>{
                    return (
                        <div className="service_list">
                            <h2 className='icon'>{icon}</h2>
                            <h2>{head}</h2>
                            <p>{desc}</p>
                            <div className="action">
                                <p>{action}</p>
                                <h2>{link}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Service