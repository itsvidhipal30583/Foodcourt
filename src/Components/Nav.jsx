import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Nav = ({ setSearch }) => {

    const [user, setUser] = useState();
    const navigate = useNavigate();
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        setUser(loggedInUser)
    }, [user])


    useEffect(() => {
        const cartRetreive = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(cartRetreive.length)
    }, [])


    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        toast.warning('UserLoggedOut Successfully');
        navigate('/login')

    }
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-warning position-sticky top-0 z-1 '>
                <div className='container-fluid'>
                    <a href="" className='navbar-brand text-white fw-bold fs-4'>FOOD COURT</a>

                    <button type='button' className='navbar-toggler bg-white text-secondary' data-bs-toggle='collapse' data-bs-target="#navbar">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id="navbar">
                        <ul className='navbar-nav mx-auto'>
                            <li className='fs-5 text-dark fw-bold'>

                                <Link className='nav-link text-white' to={'/'}> Home</Link>
                            </li>

                            <li className='fs-5 text-dark fw-bold'>

                                <Link className='nav-link text-white' to={'/contact'}>Contact</Link>
                            </li>

                            <li className='fs-5 text-dark fw-bold position-relative'>

                                <Link className='nav-link text-white' to={'/cart'}>Cart
                                    <span className='badge bg-danger position-absolute ' style={{ position: 'absolute', top: '5%', left: "85%", borderRadius: "90px", height: "20px", width: "20px", text: "center" }}>
                                        {cartCount}
                                    </span>
                                </Link>
                            </li>

                            <li className='nav-link'>
                                <input type="text" name="" id="" placeholder='Search' className='form-control ms-2' onChange={(e) => setSearch(e.target.value)} />

                            </li>
                        </ul>

                        <div className='ms-auto'>
                            {
                                user ?
                                    (
                                        <>
                                            <button className='btn btn-primary'>
                                                <Link className='nav-link'>{user.name}
                                                </Link>

                                            </button>

                                            <button className='btn btn-primary ms-3' onClick={handleLogout}>Logout</button>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <button className='btn btn-primary fw-bold'>
                                                <Link className='nav-link' to={'/login'}>Login</Link>
                                            </button>

                                            <button className='btn btn-primary ms-3 fw-bold'>
                                                <Link className='nav-link' to={'/register'}>Register</Link>
                                            </button>

                                        </>
                                    )
                            }
                        </div>
                    </div>
                </div >
            </nav>
        </>
    )
}

export default Nav
