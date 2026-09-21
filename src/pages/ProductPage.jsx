import React from 'react'
import ProductList from '../components/ProductList'
import ProductForm from '../components/ProductForm'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'
import { useDispatch } from 'react-redux'

function ProductPage() {

  const dispatch = useDispatch()
  
  return (
    <div className='min-vh-100 bg-light'>
        {/* Header */}
        <header className='bg-dark text-white py-3 shadow'>
            <div className='container'>
                <Link to={'/'} className='text-decoration-none text-white'><h3 className='mb-0'>Products Management Dashboard</h3></Link>
            </div>
        </header>
        
        {/* Main Content */}
        <main className='container py-4'>
            {/* Search + add */}
            <div className='row mb-4'>
                <div className='col-md-4'>
                    <input type="text" className='form-control' placeholder='Search product by name...' onChange={(e) => dispatch(searchProduct(e.target.value))}/>
                </div>
                <div className='col-md-4 text-md-end mt-3 mt-md-0'>
                    <Link to="/add-product" className="btn btn-primary fw-bold"> + ADD</Link>
                </div>
            </div>

            {/* Product List */}
            <ProductList/>
        </main>

        {/* Footer */}
        <footer className='bg-dark text-white text-center py-3 mt-4'>
            <p className='mb-0'> © 2026 Products Management Dashboard. All Rights Reserved. </p>
        </footer>

    </div>
  )
}

export default ProductPage
