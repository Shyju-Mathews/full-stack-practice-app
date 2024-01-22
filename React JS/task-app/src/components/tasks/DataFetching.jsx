import React, { useState, useEffect } from 'react'

const DataFetching = () => {
    const [items, setItems] = useState([])
    

    const fetchItems = async () => {
        try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!res.ok) {
            throw new Error("Invalid data")
        }
        const resData = await res.json()
        setItems(resData)

        } catch (error) {
            console.error(error.message);
        } 
    }

    useEffect(() => {
      console.log(items, "itemsssssssssss")
      fetchItems()
      
    }, [])



  return (
    <div>
      
    </div>
  )
}

export default DataFetching
