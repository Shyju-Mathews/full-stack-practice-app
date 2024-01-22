import React from 'react'
import { Link } from 'react-router-dom'

const Hooks = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", height: "100vh", alignItems: "center", justifyContent: "center", gap: "10%"}}>
        <h1 style={{textAlign: "center"}}>React Hooks</h1>
        <div style={{gap: "1rem", display: "flex", flexDirection: "column"}}>
        <li><Link to={'useRef'}>useRef</Link></li>
        <li><Link to={'useMemo'}>useMemo</Link></li>
        <li><Link to={'useCallback'}>useCallback</Link></li>
        <li><Link to={'useReducer'}>useReducer</Link></li>
        </div>

        <Link to={'/'}>Return to Home</Link>
    </div>
  )
}

export default Hooks