import React from 'react'
import { Link } from 'react-router-dom'

const Tasks = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh", alignItems: "center", justifyContent: "center", gap: "10%"}}>
        <h1 style={{textAlign: "center"}}>React Tasks</h1>
        <div style={{gap: "1rem", display: "flex", flexDirection: "column"}}>
        <li><Link to={'dropdown'}>Dropdown</Link></li>
        <li><Link to={'carosule'}>Carosule</Link></li>
        <li><Link to={'sidebar'}>SideBar</Link></li>
        <li><Link to={'textToVoice'}>Text To Voice Converter</Link></li>
        <li><Link to={'cardFlip'}>Card Flip</Link></li>
        <li><Link to={'dataFetching'}>Data Fetching</Link></li>
        <li><Link to={'stripePayment'}>Stripe Payment</Link></li>
        </div>

        <Link to={'/'}>Return to Home</Link>
    </div>
  )
}

export default Tasks