import React, {useContext, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import { ProductContext } from '../context/Context'


function EditProduct() {
    const {updatePost, name, setName, price, setPrice, expire, setExpire} = useContext(ProductContext)
    const {id} = useParams()


    useEffect(() => {
        const loadpost = () => {
            axios.get(`http://localhost:3001/edit/${id}`)
            .then(res => {
                setName(res.data.proname)
                setPrice(res.data.proprice)
                setExpire(res.data.proexpire)
            })
        }
        loadpost();
    }, [])


    return (
        <div className="formContainer">
            <form className="form" >
            <h2>Edit Product</h2>
                <div className="inputField">
                    <label>Product Name</label>
                   <input value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="inputField">
                   <label>Price</label>
                   <input value={price} type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="inputField">
                   <label>Expire Date</label>
                   <input value={expire} placeholder="Expire Date" onChange={(e) => setExpire(e.target.value)}/>
                </div>
                <div className="btn">
                   <button type="submit" onClick={(e) => {
                       e.preventDefault()
                       updatePost(id)
                       window.location = "/"
                   }}>update</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
