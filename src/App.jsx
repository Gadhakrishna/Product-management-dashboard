import React from 'react'
import ProductPage from "./pages/ProductPage"
import AddProductPage from './pages/AddProductPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>

    </>
  )
}

export default App
