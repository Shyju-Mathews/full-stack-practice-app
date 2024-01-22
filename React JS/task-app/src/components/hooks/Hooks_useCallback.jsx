import React, { useState, useEffect, useCallback } from 'react'

const Hooks_useCallback = () => {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)
    
    const theme =  {
            backgroundColor: dark? "black" : "white",
            color: dark? "white" : "black",
            height: "100vh"
        }

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    // Child component

    const List = ({getItems}) => {
        const [items, setItems] = useState([])

        useEffect(() => {
          setItems(getItems)
        //   console.log("Updating Items")
        }, [getItems])

        return (
            <>
            {
                items.map((item, i) => {
                    return (
                        <div key={i}>
                            {item}
                        </div>
                    )
                })
            } 
            </>
        )
        
    }

    
  return (
    <div style={theme}>
        <h1 style={{textAlign: "center"}}>useCallback Hook</h1>
        <div style={{height: "50%", backgroundColor: dark ? "white" : "black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "3rem"}}>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button style={{color: `${dark ? 'black' : "white"}`, border: `1px solid ${dark ? "black" : "white"}`, padding: "0.5rem", borderRadius: "10px"}} onClick={() => setDark((prev) => !prev)}>{dark ? "Light Mode" : "Dark Mode"}</button>
        </div>
        <List getItems={getItems}/>
    </div>
  )
}

export default Hooks_useCallback