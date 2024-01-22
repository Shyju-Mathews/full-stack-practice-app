import "./cardFlip.css";

const CardFlip = () => {
  return (
    <div className="tilt">
      <div className="container">
        <div className="card">
          <div className="front">
            <h2>Name: Shyju</h2>
            <h3>Software Developer</h3>
            <p>For more details see back</p>
          </div>

          <div className="back">
            <h3>Welcome back</h3>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CardFlip
