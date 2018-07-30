import React from 'react';
import { Link } from 'react-router-dom';
// import me from '../assets/Me.jpg';
import './CSS/components.css'

const Home = () => {
    return (
        <div className='home-main'>
            <div className='intro-div'>
                <h1 className='intro-text'>Hello</h1>
                <h2 className="intro-text">and</h2>
                <h1 className="intro-text">Welcome</h1>
            </div>
            <div className="intro-div">
                <h4>It's nice to finally meet you</h4>
            </div>
            {/* <h1 className='intro-one'>I'm <b>Brent Eckert</b></h1>
            <h2>Full-Stack Web Developer</h2>

            <Link style={{textDecoration: 'none'}} to='/meet'><button className='btn home'>Click Here to Learn More</button></Link><br/> */}
            {/* <img className='me' src={me} alt="Brent Eckert"/> */}
        </div>
    )
}

export default Home;