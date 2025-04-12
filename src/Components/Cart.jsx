import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const retrieveItem = JSON.parse(localStorage.getItem('cart')) || []
    setCart(retrieveItem)
  }, [])

  const handleProceed = () => {
    localStorage.removeItem('cart')
    toast.success('Food Ordered Successfully!')
    navigate('/')
  }

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, item) => item !== index)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    toast.success('Food item removed from cart.')
  }


  const totalPrice = cart.length * 199;
  return (
    <div >
      <Navbar />
      <div className="container mt-5 w-50">
        {cart.length > 0 ? (
          <>
            <div className="bg-;light p-4 rounded shadow-lg">
              <h2 className="mb-4 text-center"><i class="bi bi-cart-plus-fill"></i>   Your Cart</h2>

              {cart.map((item, index) => (
                <div 
                  key={item.idMeal}
                  className="card mb-3 shadow-lg border-0 w-75"
                >
                  <div className="row g-0 align-items-center">
                    <div className="col-md-2 text-center">
                      <img
                        src={item.strMealThumb}
                        className="img-fluid rounded-start"
                        alt={item.strMeal}
                      />
                    </div>
                    <div className="col-md-7 ps-4">
                      <h5 className="card-title">{item.strMeal}</h5>
                      <p className="text-muted mb-0">&#8377; 199</p>
                    </div>
                    <div className="col-md-3 text-end pe-4">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeFromCart(index)}
                      >
                        <span className="bi bi-trash-fill"></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className='d-flex justify-content-between mt-3'>
                <h5><b>Total Items:</b> {cart.length} </h5>
                <h5><b>Total Price</b>: {totalPrice}</h5>
              </div>
              <div className='text-end mt-3'>
                <button className='btn btn-primary'>Proceed To CheckOut</button>
              </div>

            </div>
          </>
        ) : (
          <div className="text-center p-3  shadow-sm rounded bg-light col-md-6 mx-auto">
            <h2 className=" mt-5 ">Your Cart is Empty</h2>
            <i className="bi bi-cart-x-fill fs-1 text-danger"></i>
           
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
