import React, { Component } from 'react'
import Header from './Header'

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <h1>About Component</h1>
            </div>
        )
    }
}

export default About
