import React, { Component } from 'react'
import Header from './Header'

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
                </div>
            </div>
        )
    }
}


export default Projects
