import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

function Home () {
    return (
        <div className='home'>
            <h1>Vending Machine</h1>
            <p>Choose what you would like! </p>
            <div>
                <Link to='/water' className='link'>Water</Link>
                <Link to='/chips' className='link'>Chips</Link>
                <Link to='/gummy' className='link'>Gummy</Link>
            </div>
            <img className='vending-machine' src='Vending-Machine.jpeg' alt='A vending machine' />
        </div>
    )
}

export default Home