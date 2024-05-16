import React from 'react'
import './Navbar.css'
import { navlinks } from '../Assets/data'
import Contact from '../Contact/Contact'

const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <div className="logo">
                <h2>Infigio</h2>
            </div>
            <div className="nav_links">
                <ul>
                    {navlinks.map(item => (
                    <li key={item.id}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="btn">
                <button><a href="#contact" onClick={<Contact />}>Contact us</a></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar