import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Fetch.scss'

function Fetch({ search }) {
  const [products, setProducts] = useState([])
  const [cat, setCat] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      console.log(data);
      
      setProducts(data)

      // Get unique categories
      const categories = [...new Set(data.map(p => p.category))]
      setCat(categories)
    } catch (error) {
      console.error(error)
    }
  }

  if (products.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <>
       <div className="cat">
        <button className="all-btn" onClick={() => setFilter("")}>All</button>
        {cat.map((ct, idx) => (
          <button key={idx} onClick={() => setFilter(ct)}>
            {ct}
          </button>
        ))}
      </div>

      <div className="container" id='Home'>
        {products
          .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
          .filter(p => filter ? p.category === filter : true)
          .map(product => (
            <div className="card" key={product.id}>
              <Link to={`/details/${product.id}`}>
                <img src={product.image} alt={product.title} className="card-img" />
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="card-price">Price: ${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </>
  )
}

export default Fetch
