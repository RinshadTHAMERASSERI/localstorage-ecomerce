import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import'./ProductDetails.scss'
import { Link  } from 'react-router-dom'

function ProductDeatails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    // Retrieve existing cart from localStorage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const productExists = existingCart.find((item) => item.id === product.id);

    if (!productExists) {
      existingCart.push(product);
    }

      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(existingCart));

      alert("Product added to cart!");

      
    
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details" id='Details'>
      <img
        src={product.image}
        alt={product.title}
        className="details-img"
      />
      <div className="details-content">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        
        <Link to="/cart">
        <button onClick={addToCart}>Add to Cart</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductDeatails
