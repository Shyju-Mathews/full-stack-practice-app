import React, { useState, useMemo, useEffect } from 'react'

const Hooks_useMemo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    
    const themeStyle = useMemo(() => {
        return{
            backgroundColor: dark? "black" : "white",
            color: dark? "white" : "black",
            width: "50px",
            height: "50px",
            border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }, [dark])  

    const slowFunction = (num) => {
        console.log("Calling Slow Function")
        for (let i = 0; i <= 1000000000; i++) {

        }
        return num * 2
    }

    const double = useMemo(() => slowFunction(number), [number])

    useEffect(() => {
      console.log("Theme changed")
    }, [themeStyle])
    
  return (
    <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5rem"}}>
        <h1>useMemo Hook</h1>
        <div style={{width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => setDark((prev) => !prev)}>{dark ? "Light Mode" : "Dark Mode"}</button>
            <div style={themeStyle}>{double}</div>
        </div>
    </div>
  )
}

export default Hooks_useMemo