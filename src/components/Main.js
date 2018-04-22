import React, { Component } from 'react'
import Header from './Header'
import './components.css'

class Class extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Hey</h1>
            </div>
        )
    }
}

export default Class
