import React from 'react'
import Login from './Login'

export default function Header() {
    return (
        <div class="header">
            <input type="text" placeholder="Search your accomodation"/>
            <Login/>
            <a href="/">Register</a>
        </div>
    )
}
