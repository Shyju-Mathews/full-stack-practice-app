import React from 'react'
// import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Pagination from './components/pagination/Pagination';
import Js_Practice from './components/javascript/Js_Practice';
import Hooks_useRef from './components/hooks/Hooks_useRef';
import Hooks from './components/hooks/Hooks';
import Hooks_useMemo from './components/hooks/Hooks_useMemo';
import Hooks_useCallback from './components/hooks/Hooks_useCallback';
import Hook_useReducer from './components/hooks/Hook_useReducer';
import Tasks from './components/tasks/Tasks';
import Dropdown from './components/tasks/Dropdown';
import Carosule from './components/tasks/Carosule';
import React_redux from './components/redux/content/React_redux';
import Sidebar from './components/tasks/sidebar/Sidebar';
import Text_To_Voice from './components/tasks/Text_To_Voice';
import CardFlip from './components/tasks/cardFlip/cardFlip';
import DataFetching from './components/tasks/DataFetching';
import StripePayment from './components/tasks/stripePayment/StripePayment';


// const db = [
//   {id: 1, name: "Shyju1", email: "shyju1996gmail.com"},
//   {id: 2, name: "Shyju2", email: "shyju1996gmail.com"},
//   {id: 3, name: "Shyju3", email: "shyju1996gmail.com"},
//   {id: 4, name: "Shyju4", email: "shyju1996gmail.com"},
//   {id: 5, name: "Shyju5", email: "shyju1996gmail.com"},
//   {id: 6, name: "Shyju6", email: "shyju1996gmail.com"},
//   {id: 7, name: "Shyju7", email: "shyju1996gmail.com"},
//   {id: 8, name: "Shyju8", email: "shyju1996gmail.com"},
//   {id: 9, name: "Shyju9", email: "shyju1996gmail.com"},
//   {id: 10, name: "Shyju10", email: "shyju1996gmail.com"}
// ]

function App() {

  // const [datas, setDatas] = useState(db)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [perPage] = useState(5)
  // const lastIndex = currentPage * perPage;
  // const firstIndex = lastIndex - perPage;

  // const records = datas.slice(firstIndex, lastIndex)
  // const nPages = Math.ceil(datas.length /perPage)
  // const numbers = [...Array(nPages + 1).keys()].slice(1)
  
  // const prePage = () => {
  //   if (currentPage !== firstIndex) {
  //     setCurrentPage(currentPage - 1)
  //   }
  // }

  // const changeCPage = (id) => {
  //   setCurrentPage(id)
  // }

  // const nextPage = () => {
  //   if (currentPage !== lastIndex) {
  //     setCurrentPage(currentPage + 1)
  //   }
  // }
  
  return (
    <div className='App'>
      {/* <h1>Welcome to the Task</h1>
      <p>Data</p>
      <div>
            <table className='table'>
              <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  records.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
      </div>

      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href="#" className='page-link' onClick={prePage}>Prev</a>
          </li>
          {
            numbers.map((num, i) => (
              <li className={`page-item ${currentPage === num ? 'active' : ''}`} key={i}>
                <a href="#" className='page-link' onClick={() => changeCPage(num)}>{num}</a>
              </li>
            ))
          }
          <li className='page-item'>
            <a href="#" className='page-link' onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/javascript' element={<Js_Practice />} />
        <Route path='/hooks'>
          <Route index element={<Hooks />} />
          <Route path='useRef' element={<Hooks_useRef />} />
          <Route path='useMemo' element={<Hooks_useMemo />} />
          <Route path='useCallback' element={<Hooks_useCallback />} />
          <Route path='useReducer' element={<Hook_useReducer />} />
        </Route>
        <Route path='/tasks'>
          <Route index element={<Tasks />} />
          <Route path='dropdown' element={<Dropdown />} />
          <Route path='carosule' element={<Carosule />} />
          <Route path='sidebar' element={<Sidebar />} />
          <Route path='textToVoice' element={<Text_To_Voice />} />
          <Route path='cardFlip' element={<CardFlip />} />
          <Route path='dataFetching' element={<DataFetching />} />
          <Route path='stripePayment' element={<StripePayment />} />
        </Route>
        <Route path='/redux' element={<React_redux />}/>
      </Routes>
    </div>
  )
}

export default App






// // create a  object by using class

// class Car {
//   constructor(model, name) {
//     this.model = model;
//     this.name = name;
//   }

//   start() {
//     console.log(`Name of the car is : ${this.name}`)
//   }
// }

// const res = new Car(120, "bmw")

// res.start()

// //2. Class inheritance

// class ElectricCar extends Car {

//   start() {
//     super.start()
//   }
// }

// const result = new ElectricCar("evcar", "a330")

// result.start()

// // 3. duplicate elements in array

// let arr = [1,2,3,4,2,1,3]
// let newArr = []

// const dup = arr.filter((item, index, ele) => ele.indexOf(item) !== index)
// console.log(dup)

// // 4. no of duplicates in an array

// let months = ["jan", "feb", "mar", "jan", "april", "june", "may", "april", "jan", "mar", "june"]

// const count = months.reduce((month, index) => {
//   if (month[index] === undefined) {
//     month[index] = 1;
//     return month
//   } else {
//     month[index] ++;
//     return month
//   }
// }, {})

// console.log(count)

// // 5. find the given number is integer

// const num = "shyju";

// console.log(isNaN(num))

// // 6. use of const and freez

// // const month = "jan"
// // month = "feb"
// // console.log(month)

// // let person = {
// //   name: "Shyju"
// // }

// // Object.freeze(person)
// // person.name = "Mathews"
// // console.log(person)

// // 7. array sorting

// let array = [10,2,8,20,30,15]

// array.sort((a, b) => a - b)
// console.log(array)

// // 8. sortind strings

// let arrMonth = ["jan", "feb", "mar", "april", "may"]

// arrMonth.sort()
// console.log(arrMonth)

// // 8. find unique value in an array

// let uniarr = [2,4,8,1,1,2,3,3,4,5,5]


// // let uniArr = uniarr.filter((el, index, item) => {
// //   if (item.indexOf(el) == index) {
// //     newArray.push(item[index])
// //   }
// // })

// let uniArr = uniarr.filter((item, index, arr) => arr.indexOf(item) === index).sort((a,b) => a - b);

// // for (let i = 0; i < uniarr.length; i++) {
// //   if (uniarr.indexOf(uniarr[i]) === i) {
// //     newArray.push(uniarr[i])
// //   } 
// // }

// console.log(uniArr, "uni")

// // 9. find max num in an array

// let maxarr = [1,12,24,88,55]

// // const maxArr = Math.max(...maxarr)

// function findMaxVal(arr) {
//  return arr.reduce((preval, curVal) => {
//     return preval > curVal ? preval : curVal
//   })
// }

// console.log(findMaxVal(maxarr))

// // 10. find the avg number in an array

// let avgarr = [10,20,30,40,50]

// const avgArr = avgarr.reduce((a, b) => a + b, 0)

// const arrLength = avgarr.length



// console.log(avgArr/arrLength)

// // 11. change the first char into uppercase 

// let names = ["shyju", "mathews", "darksoul"]

// // const upStr = upstr.charAt(0).toUpperCase() + upstr.substring(1)

// for (let name of names) {
//  const res = name.charAt(0).toUpperCase() + name.substring(1)
//   console.log(res)
// }

// const capz = names.map((n) => n.charAt(0).toUpperCase() + n.slice(1))
// console.log(capz)

// for (let i = 0; i < names.length; i++) {
//   const res = names[i].charAt(0).toUpperCase() + names[i].substring(1)
//  console.log(res, "ressssssssss") 
// }


// // 12. how to make a sentence in an array

// const sentence = ["welcome", "to", "our", "channel"]

// const joinedSentence = sentence.join(" ")

// console.log(sentence)
// console.log(joinedSentence)


// // 13. how to check if an array contains any elements of another array

// const firstArray = [1,2,33,12,25]
// const secArray = [3,8,20,]


// const resArray = firstArray.includes(...secArray)
// const newRes = firstArray.some((ele) => secArray.includes(ele))

// console.log(resArray)
// console.log(newRes, "neww")

// //14. how to check if the strings are anagram 

// const str1 = "Shyju"
// const str2 = "ujyhs"

// function anagram(str1, str2) {
//   const first = str1.toLowerCase().split("").sort().join()
//   const second = str2.toLowerCase().split("").sort().join()

//   return first === second
// }

// console.log(anagram(str1, str2), "ana")

// // 15. extract a few fields from the json and form a new array

// const input = {
//   "students" : [
//     {
//       id: 1,
//       name: "shyju",
//       email: "shyju123@gmail.com",
//       place: "nagercoil"
//     },
//     {
//       id: 2,
//       name: "mathews",
//       email: "mathews123@gmail.com",
//       place: "kanyakumari"
//     },
//     {
//       id: 30,
//       name: "dark",
//       email: "dark123@gmail.com",
//       place: "chennai"
//     },
//     {
//       id: 4,
//       name: "soul",
//       email: "soul123@gmail.com",
//       place: "banglore"
//     }
//   ]
// }

// const output = input.students.map((item) => {

//   const studObj = {
//     id : item.id,
//     name: item.name
//   }
//  return  studObj
// })

// console.log(output)

// // 16. filter a given obj  based on certain condtion and return the corresponding obj

// const conditonObj = input.students.filter((item) => item.id > 20? item : "" )

// console.log("cond---->>>", conditonObj)

// // 17. reverse each word in a sentence present in an array

// const crtSentence = "Welcome To Dream World Designz"

// // const revStr = crtSentence.split("").reverse().join("")

// function revStr(string, seperator) {
//   return string.split(seperator).reverse().join(seperator)
// }

// const reverseStr = revStr(crtSentence, "")
// console.log(reverseStr)

// // 17. how to check if the variables passed s an array or not

// const data = ["shyju", "mat"]

// console.log(Array.isArray(data))


// // 18. how to empty an array

// let fullArr = ["shyju", "mathews"]

// // fullArr = []
// // fullArr.splice(0, fullArr.length)

// while (fullArr.length > 0) {
//   fullArr.pop()
// }

// console.log("remove", fullArr)

// // 19. check the string is palindrom or not

// const paliStr = "MADAM"

// function palindrom(str) {
//   str = str.replace(/\W/g, '').toLowerCase()
//   return (str == str.split('').reverse().join(''))
// }

// // palindrom(paliStr)
// console.log("palindrom", palindrom(paliStr))

// // 20. how to combine 2 arrays into 3rd array using spread operator

// const cbarr1 = [1,2,3,4,5]
// const cbarr2 = [6,7,8,9,10]

// const comb = [...cbarr1 , ...cbarr2]
// const comb1 = cbarr1.concat(cbarr2)

// console.log(comb)
// console.log(comb1, "comb1")

// // flattern array
// const ffarr = [[0,8],[1,3],[4,6],[8,10],15,20]

// function conarray(a) {
//  return a.reduce((arr, newval) => arr.concat(newval) )
// }

// console.log("arcon", conarray(ffarr))

// // 21. reverse an array without changing the org array
// const a = [8,1,10,6,2,3,4,5]

// // const sss = a.sort((a,b) => a-b)
// const rr = a.slice().sort((a,b) => a - b).reverse()
// console.log(rr, "ss")
// console.log(a)

// // 22. replace, insert, delete an element at a specific index in an array

// let studIds = [10,20,30,50]

// const replaceAt = 1;
// const insertAt = 2;
// const deleteAt = 1;
// const ele = 115;

// const replace = [...studIds.slice(0, replaceAt), ele, ...studIds.slice(replaceAt + 1)]
// const insert = [...studIds.slice(0, insertAt), ele, ...studIds.slice(insertAt)]
// const remove = [...studIds.slice(0, deleteAt), ...studIds.slice(deleteAt + 1)]

// studIds[2] = 66

// console.log("studIds", studIds)
// console.log(replace, "replace")
// console.log(insert, "insert")
// console.log(remove, "remove")

// // 23. how to delete a element in an array

// const original = [1,2,3,4,5]
// const delete_At = 4
// const deleteArray = original.filter((item) => item !== delete_At)

// console.log(original, "original")
// console.log(deleteArray, "deleteArray")

// // 24. how can we clone an object

// // class Fruit {
// //   constructor (name, color){
// //     // super(props)
// //     this.name = name
// //     this.color = color
// //   }
// // }

// // const apple = new Fruit("banana", "red")
// // console.log(apple)

// const employees = {
//   id: 1,
//   name: "shyju",
//   dept: "EIE"
// }

// const newEmp = Object.assign({}, employees)
// const nextEmp = {...employees}
// console.log("employee list", newEmp)
// console.log("next emp list", newEmp)

// // 25. add a element in the begenning of an array

// const oldArray = [1,2,3,4,5]
// oldArray.unshift(0)

// const add = [10, ...oldArray]

// console.log(oldArray, "old")
// console.log(add)

// // 26. remove first and last element of an array

// const badarr = [1,2,3,4,5]
// badarr.shift()
// const frstItem = badarr.slice(1)
// const lastItem = badarr.slice(0, badarr.length-1)
// console.log("first", frstItem)
// console.log("last", lastItem)
// console.log(badarr, "bad")

// // 27. how to split a sentence in an array 

// const str = "Welcome To My Channel"

// const splitStr = str.split(" ")
// // const resArrSpl = [...splitStr]
// console.log("split", splitStr)
// // console.log("resSplit", resArrSpl)

// //  28. replace, add, delete an existing element in an object

// const orgObj = {
//   street: "jothi street",
//   place: "ngl",
//   zip: "444"
// }

// const replaceObj = {...orgObj, zip: "777"}
// const addObj = {...orgObj, state: "Tamilnadu"}
// console.log(replaceObj, "replaceObj")
// console.log(addObj, "addObj")

// // 29. combine 2 objects

// const obj1 = {
//   name: "shyju",
//   place: "ngl"
// }

// const obg2 = {
//   roleNo: 5,
//   class: "12"
// }

// const combine = {...obj1, ...obg2}
// console.log(combine, "cmbine")

// // 30. write a method which takes x number of parameters

// function getParams(...args) {
//   console.log(...args)
// }

// getParams(1)
// getParams(1,3)
// getParams(3,6,8)

// // 31. convert a given number into exact decimel points to right side

// const number = 5432.3453543456

// const n = number.toFixed(3)
// console.log(n)

// // 32. how can u return a char from a string at specific index

// const String = "Shyju"

// const char = String.charAt(String.length-1)

// // const char = String.substring(0, String.length-1) + String.charAt(String.length-1).toUpperCase()

// console.log(char)

// // 33. weakSet in javascript

// const object1 = {
//   name: "shyju",
//   place: "ngl"
// }

// const object2 = 10

// const newSet1 = new WeakSet([object1])
// console.log(newSet1)
// // const newSet2 = new WeakSet([object2])
// // console.log(newSet2)

// // 34. write an add method using js curruying concept

// function adding(x) {
//   let sum = x

//   function resultFn(y) {
//     sum = sum + y
//     return resultFn
//   }

//   resultFn.valueOf = function() {
//     return sum
//   }

//   return resultFn
// }

// console.log(adding(2)(13).valueOf())

// // 35. how to replace a given string in an array

// let places = ["ban", "banglore", "banned", "banaras"]

// // places = places.map((x) => x.replace(/ban/g, ""))

// // console.log(places)

// function replaces(arr) {
//   const res = arr.map((item) => {
//     return item.replace(/ban/g, "ben")
//   })
//   return res
// }
// console.log(replaces(places))


// // 36. how to create an array out of sentence

// const arrStr = "Welcome To Our Channel"

// const strArr = arrStr.split(" ")

// console.log(strArr)


// let arrrrr = [1,2,3,4,5]

// arrrrr.shift()
// console.log(arrrrr)

// let numb = "name"

// console.log(isNaN(numb))



// function foo1() {
//   return {
//     bar: "hello"
//   }
// }


// // function foo2() {
// //   return 
// //   {
// //     bar: "hello"
// //   }
// // }

// console.log(foo1())
// // console.log(foo2())

// console.log(false == "0")
// console.log(false === "0")

// console.log(1<2<3)
// console.log(3>2>1)
