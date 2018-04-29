import React from 'react';
import { Link } from 'react-router-dom';
import me from '../assets/Me.jpg';
import './components.css'

const Home = () => {
    return (
        <div class='home-main'>
            <h1 className='intro-one'>Hi, I'm <b>Brent Eckert</b></h1>
            <h2>Full-Stack Web Developer</h2>

            <Link to='/meet'><button className='btn home'>Click Here to Learn More</button></Link><br/>
            <img className='me' src={me} alt="Brent Eckert"/>
        </div>
    )
}

export default Home;