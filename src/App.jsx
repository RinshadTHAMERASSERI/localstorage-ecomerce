import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Fetch from './Component/Fetch'
import ProductDeatails from './Component/productDeatails'
import Cart from './Component/Cart'
import Nav from './Component/Nav'

function App() {
  const [search, setSearch] = useState("")

  return (
    <>
      <BrowserRouter>
      <Nav setSearch={setSearch}/>
        
        <Routes>
          <Route path='/' element={<Fetch search={search} />} />
          <Route path='/details/:id' element={<ProductDeatails/>}/>
          <Route  path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
