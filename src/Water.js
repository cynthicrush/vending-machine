import React from 'react'
import {Link} from 'react-router-dom'

function Water () {
    return (
        <div className='water'>
            <h1>Here you go!</h1>
            <div><Link className='link' to='/'>Home</Link></div>
            <img src='water-bottle.webp' alt='A bottle of water' />
        </div>
    )
}

export default Water