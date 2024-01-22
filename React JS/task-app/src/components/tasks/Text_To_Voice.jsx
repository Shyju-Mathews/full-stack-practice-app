import React from 'react'
import { useState } from 'react'

const Text_To_Voice = () => {

    const [text, setText] = useState("")

    const handleVoice = () => {
        let voice = new
        SpeechSynthesisUtterance(text)
        speechSynthesis.speak(voice)
    }
  return (
    <div style={{backgroundColor: "GrayText", minHeight: "100vh",display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{backgroundColor: "whitesmoke", width: "50%", height: "50vh", border: "2px dashed black", borderRadius: "5%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "15%"}}>
        <h2>Text To Voice Coverter</h2>
        <textarea style={{width: "50%", maxHeight: "50%"}} value={text} onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={handleVoice} style={{backgroundColor: "black", color: "whitesmoke", padding: "0.5rem", borderRadius: "10%"}}>Speak</button>
        </div>
    </div>
  )
}

export default Text_To_Voice