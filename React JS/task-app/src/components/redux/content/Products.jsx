import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../slices/Product_slice'

// const data = [{
//             id: 1,
//             productName: 'maggie',
//             productPrice: "100",
//             productQuantity: 1
// }]

const Products = () => {
    // const [datas, setDatas] = useState(data)
    const products = useSelector((state) => state.product.products)
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState("")
    const [productQuantity, setProducQuantity] = useState(1)

    const dispatch = useDispatch()


    const handleAdd = (e) => {
        e.preventDefault()

        if (productName === "" || productPrice === "" || productQuantity === "") {
            alert("Please fill all fields")
        }
        let id = products.length ? products[products.length -1].id + 1 : 1;
        // const res = {id: id, productName: productName, productPrice: productPrice, productQuantity: productQuantity}
        const res = {id, productName, productPrice, productQuantity}
        // const data = [...products, res]
        console.log(res, "dataaaaaaaaaaaaaaa")
        // if (res) {
            
        // }
            // setProducts(data)
            // dispatch(setProducts({type: "ADD_PRODUCTS", payload: data}))
            dispatch(setProducts(res))
            setProductName("")
            setProductPrice("")
            setProducQuantity(1)
    }

    useEffect(() => {
      console.log(products, "proddddddddddddddddd")
        setTimeout(() => {
          console.log("component rendered")
        }, 1000);
    }, [products])
    
  return (
    <div>
        {/* Heading */}
        <p  style={{textAlign: "center", fontSize: "2rem", fontStyle: "italic", fontWeight: "bolder"}}>Products</p>

        {/* Add Products Form */}
        <form onSubmit={handleAdd} action="" style={{textAlign: "center",width: "100%", gap: "2rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <input type="text" placeholder='name' value={productName} onChange={(e) => setProductName(e.target.value)}/>
            <input type="text" placeholder='price' value={productPrice} onChange={(e) => setProductPrice(e.target.value)}/>
            <input type='number' placeholder='quantity' value={productQuantity} onChange={(e) => setProducQuantity(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>

        {/* product Data */}
      <div>
      <p  style={{textAlign: "center", fontSize: "2rem", fontStyle: "italic", fontWeight: "bolder"}}>Product Data</p>
        <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {/* {
              products && products.map((product, index) => (
                
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productPrice}</td>
                  <td>{product.productQuantity}</td>
                </tr>
                
              ))
            } */}

            {
              products.length === 0 ? (
                <tr>
                  <td>No Products here</td>
                </tr>
              ) : (
                products.map((product, index) => (
                
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.productName}</td>
                      <td>{product.productPrice}</td>
                      <td>{product.productQuantity}</td>
                    </tr>
                    
                  ))
              )
              
            }
          </tbody>
        </table>
        </div>

    </div>
  )
}

export default Products