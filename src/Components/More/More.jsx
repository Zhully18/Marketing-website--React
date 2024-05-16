import React from 'react'
import './More.css'
import { more } from '../Assets/data'
import Contact from '../Contact/Contact'
import img from '../Assets/img2.jpg'

const More = () => {
  return (
    <div>
        <div className="more">
            <div className="more_left">
                {more.map(({head, desc}) =>{
                    return (
                        <div className="left_content">
                            <h1>{head}</h1>
                            <p>{desc}</p>
                            <button><a href="#contact" onClick={<Contact />}>Learn More</a></button>
                        </div>
                    )
                })}
            </div>
            <div className="more_right">
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default More