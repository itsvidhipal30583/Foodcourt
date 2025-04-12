import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SimpleSlider from './SimpleSlider';
import Navbar from './Navbar';

const Home = () => {
    const [apiData, setapiData] = useState([]);
    const [filter, setFilter] = useState('indian');
    const [search, setSearch] = useState();
    const [cart, setCart] = useState([]);
    const navigate = useNavigate()

    const apifetch = async () => {
        const api = search ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}
`: `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`
        const result = await fetch(api);
        const data = await result.json();
        setapiData(data.meals || [])
    }

    useEffect(() => {
        apifetch()
    }, [filter, search])


    const addToCart = (fooditem) => {
        const existingFood = JSON.parse(localStorage.getItem('cart'));
        const updateCart = [...existingFood, fooditem];
        setCart(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart));
        toast.success('Food added to cart', { position: "top-center" })
        navigate('/cart');
    };
    return (
        <>
            <div>
                <Navbar setSearch={setSearch} />

                <SimpleSlider />

                <div className='d-flex justify-content-center mt-5 gap-5 '>
                    <button className='btn btn-primary fw-bold' onClick={() => setFilter('indian')}>Indian</button>
                    <button className='btn btn-danger fw-bold' onClick={() => setFilter('chinese')}>Chinese</button>
                    <button className='btn btn-warning fw-bold' onClick={() => setFilter('thai')}>Thai</button>
                    <button className='btn btn-success fw-bold' onClick={() => setFilter('british')}>British</button>
                    <button className='btn btn-info fw-bold' onClick={() => setFilter('canadian')}>Canadian</button>
                    <button className='btn btn-primary fw-bold' onClick={() => setFilter('russian')}>Russian</button>
                </div>
                <div className='d-flex justify-content-center bg-dark flex-wrap gap-5 mt-5'>
                    {
                        apiData.map((fooditem, index) => (
                            <div key={fooditem.idMeal} className='card col-lg-3 shadow-lg rounded-1'>
                                <img src={fooditem.strMealThumb} style={{ height: "280px", borderRadius: "5px" }} alt="" />

                                <div className='card-body p-3'>
                                    <h4>{fooditem.strMeal}</h4>
                                    <h4>&#8377; 99</h4>
                                </div>

                                <div className='card-footer'>
                                    <button className='btn btn-primary w-100' onClick={() => addToCart(fooditem)}>Add To Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home

