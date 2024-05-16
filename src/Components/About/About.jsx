import React from 'react'
import './About.css'
import img from '../Assets/img3.jpg'
import { about } from '../Assets/data'

const About = () => {
  return (
    <div>
        <div className="about" id='about'>
            <div className="left">
                <img src={img} alt="" />
            </div>
            <div className="right">
                <h3>About Us</h3>
                <h1>We Give The Best Solution To Grow Up your business</h1>
                <p class="text">We have all hands on deck to provide you with the best service that suits your business</p>
                <div className="about_listing">
                    {about.map(({number, head, text}, index)=> {
                        return (
                            <div className="about_list">
                                <div className="icon">
                                    <h2>{number}</h2>
                                    <div className="design"></div>
                                </div>
                                <div className="list_txt">
                                    <h2>{head}</h2>
                                    <p>{text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About