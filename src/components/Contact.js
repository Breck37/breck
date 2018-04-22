import React, { Component } from 'react'
import Header from './Header'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Contact Component</h1>
            </div>
        )
    }
}


export default Contact
