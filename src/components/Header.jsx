import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='header'>
                <h1>{this.props.name}</h1>
                <nav className='menu'>
                    <a href='#'>link1</a>
                    <a href='#'>link1</a>
                     <a href='#'>link1</a>
                </nav>
            </div>

        )
    }
}

export default Header;


