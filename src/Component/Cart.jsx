import React, { useEffect, useState } from 'react'
// import { data, useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './Cart.scss'
import { useNavigate } from 'react-router-dom';


function Cart() {
  
const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
let a = Math.round(totalPrice+100) 
let result = a+100;
console.log(result);

let item = cartItems.length
console.log("item",item);

const PlaceHolder = ()=>{
  alert("order placed succesfully")
  localStorage.removeItem('cart')
  // location.reload();
  navigate("/")
  

}
// const totalItems = cartItems.reduce((acc,item)=>acc+item.)


// let b =100
// let result = a + b
// console.log("result",result);


  return (
    <div className='cart'>
      <div className='div1'>
      <h2 >Your cart</h2>
      {
        cartItems.length ===0?(
          <p>Your Cart Is Empty.</p>
        ):(
          <div className='cart1'>
            {
              cartItems.map((item)=>(
                <div key={item.id}
                  className="cart2">
                  <img src={item.image} 
                  alt={item.title}width="100" />
                  <div className='div2'>
                    <h3>{item.title}</h3>
                    <p>price:${item.price}</p>
                    <button onClick={()=>removeFromCart(item.id)}>Remove</button>
                  </div>

                </div>
              ))
            }
          </div>
        )
      }
      </div>
      <div className='div3'>
      <h3 className='h3'>Product Details</h3>
        <table className='table'>
          <thead>
        <tr>
          <td>Total items</td>
          <td className='th'>{item}</td>
        </tr>
        </thead>
        <tbody>
          <tr>
          <td>price</td>
          <td className='th'>${result}</td>
          </tr>
          </tbody>
          <tbody>
         <tr>
          <td>Delivery charge </td>
          <td className='th'>$:100</td>
          </tr>  
          </tbody>
        </table>
        <hr />
        <p>Total: ${result}</p>
        <button className='button' onClick={PlaceHolder}>PLACE ORDER</button>
       
      </div>
     
    </div>
  )
}

export default Cart
