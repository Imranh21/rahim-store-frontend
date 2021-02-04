import React, {useContext, useState} from 'react'
import {NavLink} from 'react-router-dom'
import CreateIcon from '@material-ui/icons/Create';
import CloseIcon from '@material-ui/icons/Close';

import { ProductContext } from '../context/Context'


function ProductList() {
    const {products, deletePost } = useContext(ProductContext)
    const [searchField, setSearchField] = useState("");

    return (
        <div>
            <div className="productHeader">
                <h3 className="heading">Product List</h3>
                <NavLink to="/add" className="addBtn">+ add</NavLink>
            </div>

            <div className="filterContainer">
                <input className="filterInput" value={searchField} onChange={(e) => setSearchField(e.target.value)} placeholder="filter product" /> 
            </div>


            <div className="tableContainer">
                <div className="element">Name</div>
                <div className="element">Price</div>
                <div className="element">Expire</div>
                <div className="element">Action</div>
            </div>
            <div className="boxContainer">
                {products.filter(data => {
                    if (searchField === ""){
                        return data
                    } else if (
                        data.proname.toLowerCase().includes(searchField.toLocaleLowerCase())   
                    ) {
                        return data
                    }
                }).map((product, key) => {
                    return <div className="box" key={key}>
                        <p className='product  productName'>{product.proname}</p>
                        <p className="product productPrice">${product.proprice}</p>
                        <p className="product productDate">{new Date(product.proexpire).toLocaleDateString()}</p>
                        <div className="product productAction">
                           <NavLink to={`/edit/${product._id}`}>
                              <CreateIcon className="editPost"/>
                           </NavLink>
                           <CloseIcon className="deletePost" onClick={() => deletePost(product._id)} />
                        </div>
                        
                        
                        
                    </div>
                })}
            </div>
            
        </div>
    )
}

export default ProductList
