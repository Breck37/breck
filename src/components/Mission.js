import React, { Component } from 'react'
import Header from './Header'

class Mission extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Mission Component</h1>
            </div>
        )
    }
}

export default Mission
