import React from "react";
import { useState } from "react";
import { Link, useNavigation } from "react-router-dom";


const db = [
  {id: 1, name: "Shyju1", email: "shyju1996gmail.com"},
  {id: 2, name: "Shyju2", email: "shyju1996gmail.com"},
  {id: 3, name: "Shyju3", email: "shyju1996gmail.com"},
  {id: 4, name: "Shyju4", email: "shyju1996gmail.com"},
  {id: 5, name: "Shyju5", email: "shyju1996gmail.com"},
  {id: 6, name: "Shyju6", email: "shyju1996gmail.com"},
  {id: 7, name: "Shyju7", email: "shyju1996gmail.com"},
  {id: 8, name: "Shyju8", email: "shyju1996gmail.com"},
  {id: 9, name: "Shyju9", email: "shyju1996gmail.com"},
  {id: 10, name: "Shyju10", email: "shyju1996gmail.com"}
]

const Pagination = () => {
  const [datas, setDatas] = useState(db);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;

  const records = datas.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(datas.length / perPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);
  console.log(numbers, "numbrsssssssssssss")
  console.log(numbers.length, "numlen")
  

  // const prePage = () => {
  //   if (currentPage !== firstIndex) {
  //     setCurrentPage(currentPage - 1);
  //   } else if (currentPage === firstIndex) return
  // };

  const prePage = () => {
    if (currentPage === numbers[0] ) {
      return
    } else if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1)
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage === numbers.length) return
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    } 
  };

  return (
    <div className="App">
      <h1>Welcome to the Task</h1>
      {/* <p>Data</p> */}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((num, i) => (
            <li
              className={`page-item ${currentPage === num ? "active" : ""}`}
              key={i}
            >
              <a
                href="#"
                className="page-link"
                onClick={() => changeCPage(num)}
              >
                {num}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>

      <Link to={'/'}>Return to home</Link>
    </div>
  );
};

export default Pagination;
