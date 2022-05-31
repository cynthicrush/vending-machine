import React from 'react'
import {Link} from 'react-router-dom'


function Gummy () {
    return (
        <div className='gummy'>
            <h1>Here you go!</h1>
            <div><Link className='link' to='/'>Home</Link></div>
            <img src='gummy.jpeg' alt='A bag of gummy bear' />
        </div>
    )
}

export default Gummy