import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Hooks_useRef = () => {
    const [name, setName] = useState("")
    // const [renderCount, setRenderCount] = useState(0)
    // const renderCount = useRef(1)
    const inputRef = useRef()
    const prevName = useRef()

    // useEffect(() => {
    // //   setRenderCount((preCount) => preCount + 1)
    // renderCount.current = renderCount.current + 1
    // }, [])

    useEffect(() => {
      prevName.current = name
    }, [name])
    
    

    const focus = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
            // inputRef.current.value = "global"
        }
    }


  return (
    <div style={{textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", height: "100vh", alignItems: "center", gap: "5rem"}}>
        <h1>useRef Hook</h1>
        <div>
        <input ref={inputRef} type="text" placeholder='name' value={name}onChange={(e) => setName(e.target.value)} /> <br /> <br />
        <p>My Name is {name}</p>
        {/* <p>I rendered {renderCount.current} times</p> */}
        <button onClick={() => focus()}>Focus</button>
        <div>My name is {name} and it is used to be {prevName.current}</div>
        </div>
    </div>
  )
}

export default Hooks_useRef