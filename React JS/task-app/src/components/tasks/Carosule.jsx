import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



const data = [
  {
    id: 1,
    author: "Mark ben",
    // width: 5000,
    // height: 3333,
    // url: "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    download_url: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    author: "Alejandro cuba",
    // width: 5000,
    // height: 3333,
    // url: "https://unsplash.com/photos/y83Je1OC6Wc",
    download_url: "https://images.unsplash.com/photo-1695765189584-046b776809cb?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    author: "benjamin zako",
    // width: 5000,
    // height: 3334,
    // url: "https://unsplash.com/photos/LF8gK8-HGSg",
    download_url: "https://images.unsplash.com/photo-1698675951502-5fc1b750c6b1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// console.log(data.indexOf(data[0]), "l")


const Carosule = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [banner, setBanner] = useState([])
  // console.log(count, "count")
  // console.log(banner, "banner")

  // const handleNext = () => {
  //   let next = []
  //   for (let i = 0; i < data.length; i++) {
  //     let current = data.indexOf(data[0])
  //     if (current === i) {
  //       next.push(data[i + 1])
  //     }
  //     console.log(next)
  //     break
  //   }
  // }

  const getBanner = () => {
  const res = data.filter((item, index, arr) => arr.indexOf(item) === currentSlide)
  // const res = data.filter((item, index) => index === currentSlide)
  // console.log(res, "firstResponse")
  setBanner(res)
  }

  useEffect(() => {
    getBanner()
  }, [currentSlide])  // eslint-disable-line react-hooks/exhaustive-deps
  
  // console.log(res, "strArray")

  const handleChange = (cmd) => {
    if (cmd === "prev") {
      if (currentSlide === 0) return
      setCurrentSlide(prev => prev - 1)
    } else if (cmd === "next") {
      if (currentSlide >= data.length -1) return
      setCurrentSlide(prev => prev + 1)
    }

    // const res = data.filter((item,index,arr) => arr.indexOf(item) === count)
    // setBanner(res)
    // console.log(res, "res")
  }
  return (
  <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "bisque" }}>
      <h1 className="heading">Carosule</h1>

   <div style={{width: "50%"}}>
     <Carousel>
        <div style={{height: "80vh"}}>
          <img src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg" alt="img" />
          <p className="legend">Legend 1</p>
        </div>
        <div style={{height: "80vh"}}>
          <img src="https://images.pexels.com/photos/355663/pexels-photo-355663.jpeg" alt="img" />
          <p className="legend">Legend 2</p>
        </div>
        <div style={{height: "80vh"}}>
          <img src="https://images.pexels.com/photos/5396097/pexels-photo-5396097.jpeg" alt="img" />
          <p className="legend">Legend 3</p>
        </div>
        
      </Carousel>
   </div>
      
    <div style={{width: "100%"}}>
        {
            banner.map((item) => (
                <div key={item.id} style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", gap: "1rem"}}>
                    <button disabled={currentSlide === 0} style={{backgroundColor: "transparent", height: "100%", padding: "0.5rem", borderRadius: "30%"}} onClick={() => handleChange("prev")}>Prev</button>
                    <div style={{width: "70%"}}>
                    <img src={item.download_url} alt="carosule" style={{width: "100%", height: "50vh"}} />
                    <p>{item.author}</p>
                    <span>{currentSlide + 1} of {data.length}</span>
                    </div>
                    <button disabled={currentSlide === data.length - 1} style={{backgroundColor: "transparent", height: "100%", padding: "0.5rem", borderRadius: "30%"}} onClick={() => handleChange("next")}>Next</button>
                </div>
            ))
        }
    </div>
  </div>
  );
};

export default Carosule;
