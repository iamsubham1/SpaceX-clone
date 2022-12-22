import React from 'react'
import Hamburger from './Hamburger'

export default function Navbar() {

    return (
        <nav className='Navbar' id='navbar'>
            <ul>
                <li><img src='spacex.svg' /></li>
                <li><a href='*'>FALCON9</a></li>
                <li><a href='*'>FALCONHEAVY</a></li>
                <li><a href='*'>DRAGON</a></li>
                <li><a href='*'>STARSHIP</a></li>
                <li><a href='*'>HUMANSPACEFLIGHT</a></li>
                <li><a href='*'>RIDESHARE</a></li>
                <li><a href='*'>STARSHIELD</a></li>
                <li><a href='*'>STARLINK</a></li>
                <li><a href='*'>SHOP</a></li>
                <li><a href='*'><Hamburger /></a></li>

            </ul>
        </nav >

    )
}
