import React from 'react'
import ProductForm from '../components/ProductForm'
import { Link } from 'react-router-dom'

function AddProductPage() {
  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
        <header className='bg-dark text-white py-3 shadow'>
            <div className='container'>
                <Link to={'/'} className='text-decoration-none text-white'><h3 className='mb-0'>Products Management Dashboard</h3></Link>
            </div>
        </header>

      <main className="container py-5">
        <div className="card shadow-sm">
          <div className="card-header bg-dark text-white">
            <h5 className="mb-0">Product Details</h5>
          </div>
          <div className="card-body">
            <ProductForm />
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          © 2026 Products Management Dashboard. All Rights Reserved.
        </p>
      </footer>

    </div>
  )
}

export default AddProductPage