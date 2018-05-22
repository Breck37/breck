import React, { Component } from 'react'
import Header from './Header'
import './CSS/components.css'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                
                    <h1>Projects component</h1>

                    <div className='project-display'>   
                        <div className="project one"></div>
                        <div className="project two"></div>
                        <div className="project three"></div>
                        <div className="project four"></div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Projects
