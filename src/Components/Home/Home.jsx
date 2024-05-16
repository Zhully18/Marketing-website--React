import React from 'react'
import './Home.css'
import { FaCirclePlay } from "react-icons/fa6";
import m2 from '../Assets/m2.jpg'
import amazon from '../Assets/amazon logo.png'
import facebook from '../Assets/fb logo.png'
import spotify from '../Assets/spotify logo.png'
import uber from '../Assets/uber.png'
import yahoo from '../Assets/yahoo.png'
import stripe from '../Assets/stripe.png'
import airbnb from '../Assets/airbnb.png'

const Home = () => {
  return (
    <div>
        <div className="hero" id='home'>
        <div className="left">
            <p className="gold">Unlock growth using creativity & data to boost your business</p>
            <h1>We Build Rapid Solution For Your Business</h1>
            <p className="white">Let's start something big together, lets increase your revenue using our expert knowledge for your business</p>
            <div className="btns">
                <button>Schedule A Call</button>
                <button>Watch demo</button>
                <FaCirclePlay className='play_icon'/>
            </div>
        </div>
        <div class="right">
            <img src={m2} alt=""/>
        </div>
    </div>
    <div className="clients">
        <div className="clients_detail">
            <div className="imgs">
                <img src={stripe} alt=""/>
                <img src={amazon} alt=""/>
                <img src={spotify} alt=""/>
                <img src={facebook} alt=""/>
                <img src={spotify} alt=""/>
                <img src={airbnb} alt=""/>
                <img src={yahoo} alt=""/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home