import React, { Component } from 'react'
import Header from './Header'
import './CSS/components.css'
import glam from 'glamorous'

const Word = glam.div({
    color: 'red',
    fontSize: 24,
})

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
                <div className='container'>
                    <h1>Hey</h1>

                    <Word className='word'>Hello</Word>
                </div>
            </div>
        )
    }
}

export default Class
