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
                    <input name='name'type="text"/>
                    <input name='email' type="text"/>
                    <textarea name="content" id="" cols="30" rows="10"></textarea>
                    <div>
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
