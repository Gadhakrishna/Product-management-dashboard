import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/slices/productSlice'

function ProductForm() {
  
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  return (
    <div>
      <div className="mb-3">
        <label className="form-label">Product Name</label>
        <input type="text" className="form-control" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input type="text" className="form-control" placeholder="Enter image URL" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}/>
      </div>
      <div className="text-end">
        <button className="btn btn-success" onClick={() => { console.log("ADD CLICKED") 
        dispatch(addProduct({ id: Date.now(), title: name, thumbnail: image, price: Number(price)}))}}> Add Product </button>
      </div>
    </div>
  )
}

export default ProductForm