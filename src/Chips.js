import React from 'react'
import {Link} from 'react-router-dom'


function Chips () {
    return (
        <div className='chips'>
            <h1>Here you go!</h1>
            <div><Link className='link' to='/'>Home</Link></div>
            <img src='chips.jpg' alt='A bag of potato chips' />     
        </div>
    )
}

export default Chips