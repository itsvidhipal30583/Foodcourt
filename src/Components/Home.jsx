import React, { useEffect, useState } from 'react'
import SimpleSlider from './SimpleSlider'
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [apiData, setapiData] = useState([]);
  const [filter, setFilter] = useState('indian')
  const [search, setSearch] = useState();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate()

  const apifetch = async () => {
    const api = search ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}` : `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filter}`
    const response = await fetch(api)
    const data = await response.json();
    setapiData(data.meals || [])
    console.log(data.meals)
  }

  useEffect(() => {
    apifetch()
  }, [filter, search])


  const addToCart = (fooditem) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updateCart = [...existingCart, fooditem];
    localStorage.setItem('cart', JSON.stringify(updateCart));
    toast.success('Food Added to Cart..', { position: "top-center" });
    navigate('/cart');
  };


  return (
    <div>
      <Navbar setSearch={setSearch} />
      <SimpleSlider />
      <div className='d-flex justify-content-center gap-5 mt-5' >
        <button className='btn btn-primary' onClick={() => setFilter('indian')}>Indian</button>
        <button className='btn btn-danger' onClick={() => setFilter('canadian')}>Canadian</button>
        <button className='btn btn-success' onClick={() => setFilter('british')} >British</button>
        <button className='btn btn-warning' onClick={() => setFilter('thai')}>Thai</button>
        <button className='btn btn-secondary' onClick={() => setFilter('chinese')}>Chinese</button>
        <button className='btn btn-danger' onClick={() => setFilter('russian')}>Russian</button>
      </div>
      <div className='d-flex justify-content-center bg-dark  flex-wrap gap-5 p-4 mt-5 mb-5 '>
        {
          apiData.map((fooditem, index) => (
            <div key={fooditem.idMeal} className='card col-lg-3 shadow-lg rounded-3' style={{width:"290px", height:"350px"}}>
              <img src={fooditem.strMealThumb} style={{ height: "180px", borderRadius: "8px" }} alt="" />
              <div className='car-body p-3 '>
                <h4>{fooditem.strMeal}</h4>
                <h4>&#8377; 199</h4>
              </div>
              <div className='card-footer '>
                <button className='btn btn-primary w-100' onClick={() => addToCart(fooditem)}  >Add To Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
