import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'


export const ProductContext = createContext();

function Context({children}) {
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [expire, setExpire] = useState("")
    

    useEffect(() => {
        axios.get("http://localhost:3001/")
        .then(res => {
            console.log(res.data)
            setProducts(res.data)
        })
    },[])

    const addPost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add", {
            name: name,
            price: price,
            expire: expire
        })
        
    }



    const deletePost = (id) => {
        axios.delete(`http://localhost:3001/${id}`)
        
    }



    const updatePost = (id) => {
        
        axios.put(`http://localhost:3001/update/${id}`, {
            name: name,
            price: price,
            expire: expire
        })
        setName("")
        setPrice("")
        setExpire("")
    }
    return (
        <ProductContext.Provider value={{products, addPost, deletePost, updatePost, name, setName, price, setPrice, expire, setExpire}}>
           {children}
        </ProductContext.Provider>
    )
}

export default Context
