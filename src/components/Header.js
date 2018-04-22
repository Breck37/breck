import React, { Component } from 'react'
import './components.css'
import StyledLink  from './StyledLink'


class Header extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div className='main'>
                <span>
                    <h1>Hi, I'm Brent Eckert</h1>
                </span>

                <div id='links'>
                    <StyledLink to='/projects'><span className='links'>Projects</span></StyledLink>
                    <StyledLink to='/about'><span className='links'>About</span></StyledLink>
                    <StyledLink to='/futuremission'><span className='links'>Mission</span></StyledLink>
                    <StyledLink to='/contactbrent'><span className='links'>Contact</span></StyledLink>
                </div>
            </div>
        )
    }
}

export default Header
