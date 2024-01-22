import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Welcome To The Tech World</h1>
      <div>
        <h2 style={{textAlign: "center", color: "whitesmoke"}}>Chapters</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr className="first_row">
              <td>1</td>
              <td>Pagination</td>
              <td><Link to={"/pagination"}>Link</Link></td>
            </tr>
            <tr className="second_row">
              <td>2</td>
              <td>Javascript</td>
              <td><Link to={"/javascript"}>Link</Link></td>
            </tr>
            <tr className="third_row">
              <td>3</td>
              <td>Hooks</td>
              <td><Link to={"/hooks"}>Link</Link></td>
            </tr>
            <tr className="foruth_row">
              <td>4</td>
              <td>Tasks</td>
              <td><Link to={"/tasks"}>Link</Link></td>
            </tr>
            <tr className="fifth_row">
              <td>5</td>
              <td>Redux</td>
              <td><Link to={"/redux"}>Link</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
