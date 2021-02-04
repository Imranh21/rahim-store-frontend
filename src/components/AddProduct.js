import React, {useContext} from 'react'
import { ProductContext } from '../context/Context'


function AddProduct() {
    const {addPost, setName, setPrice, setExpire} = useContext(ProductContext)
    return (
        <div className="formContainer">
            
            <form className="form" onSubmit={addPost}>
            <h2>add Product</h2>
                <div className="inputField">
                    <label className="lbl">Product Name</label>
                   <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="inputField">
                   <label className="lbl">Price</label>
                   <input type="number" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="inputField">
                   <label  className="lbl">Expire Date</label>
                   <input type="date" placeholder="Expire Date" onChange={(e) => setExpire(e.target.value)}/>
                </div>
                <div className="btn">
                   <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
