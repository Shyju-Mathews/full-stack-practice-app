import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDecrement, setIncrement } from '../slices/CounterSlice'

const Counter = () => {
    // const [count, setCount] = useState(0)
    const count = useSelector((state) => state.counter.count)
    console.log(count, "CCCCCCCCCCCCCC")
    
    const dispatch = useDispatch()

    const handleClick = (cmd) => {
        if (cmd === "inc") {
            dispatch(setIncrement(count))
        } else if (cmd === "dec") {
            dispatch(setDecrement(count))
        }
    }

  

    // const handleClick = (cmd) => {
    //     if (cmd === "inc") {
    //         setCount(prev => prev + 1)
    //     } else if (cmd === "dec") {
    //         setCount(prev => prev - 1)
    //     }
    // }
  return (
    <div style={{display: "grid", placeContent: "center"}}>
        <h1 style={{textAlign: "center", fontSize: "2rem", fontStyle: "italic", fontWeight: "bolder"}}>Counter</h1>
        <p>This is a simple Counter Component</p>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "2rem"}}>
            <button style={{ border: `1px solid black`, padding: "0.5rem", borderRadius: "10px"}} onClick={() => handleClick("dec")}>-</button>
            <span style={{fontFamily: "monospace", fontSize: "25px", fontWeight: "bolder"}}>{count}</span>
            <button style={{ border: `1px solid black`, padding: "0.5rem", borderRadius: "10px"}} onClick={() => handleClick("inc")}>+</button>
        </div>
    </div>
  )
}

export default Counter