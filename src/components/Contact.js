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
                <div className="container">
                <h1>Contact Component</h1>
                <form action="">
                        <div className="top">
                            <input name='name'type="text" placeholder='Enter name here'/>
                            <input name='email' type="text" placeholder='Enter email here'/>
                        </div>
                    <textarea name="content" id="" cols="30" rows="10" placeholder='Enter text here'></textarea>
                    <div className='bottom'>
                        <button>Send</button>
                        <button>Clear</button>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}


export default Contact
