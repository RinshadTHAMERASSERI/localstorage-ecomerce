import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Fetch from './Component/Fetch'
import ProductDetails from './Component/ProductDetails'
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
          <Route path='/details/:id' element={<ProductDetails/>}/>
          <Route  path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
