import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Navbar from './Navbar';

const Cart = () => {
    const [cart, setCart] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        const retriveItem = JSON.parse(localStorage.getItem('cart')) || []
        setCart(retriveItem);

    }, []);

    const handleproceed = () => {
        localStorage.removeItem('cart');
        toast.success('Food Ordered Successfully')
        navigate('/');

    }
    return (
        <div>
            <Navbar />
            <div>
                {
                    cart.length > 0 ?
                        (
                            <>
                                <div className='shadow-lg p-4 container col-lg-8 mt-5 rounded-4'>
                                    <h1>Your Cart</h1>
                                    {
                                        cart.map((cartItem) => (



                                            <div className='d-flex flex-row justify-content-center align-item-center shadow-lg p-4' key={cartItem.idMeal}>
                                                <img src={cartItem.strMealThumb} style={{ width: "150px" }} alt="" />

                                                <div className='d-flex flex-grow-1 justify-content-center gap-5'>
                                                    <h4>{cartItem.strMeal}</h4>
                                                    <h4>&#8377;99</h4>
                                                </div>
                                                <div>
                                                    <button className='btn btn-danger'><span className='bi bi-trash'></span></button>
                                                </div>
                                            </div>
                                        ))
                                    }

                                    <div>
                                        <button className='btn btn-primary mt-4' onClick={handleproceed}>Proceed to checkout </button>

                                    </div>
                                </div >

                            </>
                        ) :
                        (
                            <>
                                <div className=' text-center mt-5 shadow-lg col-4 container p-3 rounded-3'>
                                    <h1>Your Cart is empty</h1>
                                    <span className='bi bi-cart-x-fill text-danger fs-1'></span>
                                </div>
                            </>
                        )
                }
            </div >
        </div>
    )
}
export default Cart


