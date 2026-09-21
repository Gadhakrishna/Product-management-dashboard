import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getAllProducts } from '../redux/slices/productSlice'

function ProductList() {

  const dispatch = useDispatch()

  const { allProducts, loading, error } = useSelector(
  state => state.productReducer
  )

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className="row g-4">

      {/* Product Card */}
      {allProducts.map(item => (
        <div className="col-md-6 col-lg-4" key={item.id}>
            <div className="card w-80 h-100 shadow-sm">
                <img src={item.thumbnail} className="card-img-top" alt={item.title} />

                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text"> Price: ${item.price}</p>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-warning">Update</button>
                        <button className="btn btn-danger" onClick={() => {if(window.confirm("Are you sure you want to delete this product?")){dispatch(deleteProduct(item.id))}}}>Delete</button>
                    </div>
                </div>

            </div>
        </div>
      ))}
      
    </div>
  )
}

export default ProductList