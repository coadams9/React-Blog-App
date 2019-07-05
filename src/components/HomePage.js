import React from 'react'
import '../App.css'
import NavBar from './NavBar'




export default function HomePage() {
    return (
        <React.Fragment>
            <NavBar />
            <div id='title'>
                <h1 id='title1'>Blog Life</h1>
            </div>
        </React.Fragment>
    )
}