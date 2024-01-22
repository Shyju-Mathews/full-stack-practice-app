import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const data = [
    {
      id: 1,
      country: "India", 
      places: ["Chennai", "Banglore", "Hydrabad"]
    },
    {
      id: 2,
      country: "America",
      places: ["NewYork", "California", "Texas"]
    },
    {
      id: 3,
      country: "Europe",
      places: ["Germany", "Paris", "Swizz"]
    }
  ];    

const style = {
    heading: {
        color: "red",
        textAlign: "center"
    },
    text: {
        color: "green",
        fontSize: 20
    }
}

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false)
    console.log("isActive", isActive)
    const [country, setCountry] = useState("");
    const [place, setPlace] = useState("");

    const showmenu = () => {
        setIsActive((prev) => !prev)
    }

    

  return (
    <div>
        {/* Single Dropdown */}

        <h1 style={style.heading}>Drop_Down</h1>
        <p style={style.text}>Welcome</p>
        {/* <div>
            <select name="select" id="">
                <option value="">Select</option>
                <option value="">Name</option>
                <option value="">Age</option>
                <option value="">Place</option>
            </select>
        </div> */}
        <div style={{textAlign: "center"}}>
            <button type='button' onClick={() => showmenu()}>Click me</button>
            {
                isActive && (
                <ul style={{listStyle: "none"}}>
                <li>Name</li>
                <li>Age</li>
                <li>Place</li>
                <li>Email</li>

            </ul>
                ) 
            }
            
        </div>



        {/* Sub Dropdown */}
        <div style={{textAlign: "center", marginTop: "2rem"}}>
            <h2>Sub Dropdown</h2>
        <section>
          <label>Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">select</option>
            {data.map((item, index) => (
              <option key={item.id} value={index}>{item.country}</option>
            ))}
          </select>
        </section>

        <br />
        <br />

        <section>
          <label>Place</label>
          <select value={place} onChange={(e) => setPlace(e.target.value)}>
            {data[country]?.places.map((item, index) => (
              <option key={index} value={index}>{item}</option>
            ))}
          </select>
        </section>
      </div>

    </div>
  )
}

export default Dropdown
