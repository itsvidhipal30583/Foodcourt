import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Navbar = ({setSearch}) => {
    const [user, setUser] = useState();
    const navigate = useNavigate();
    const[cartCount,setCartCount] = useState(0) 

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        setUser(loggedInUser)   
    }, [])

    useEffect(()=>{
        const cartCounts = JSON.parse(localStorage.getItem('cart')) || []
        setCartCount(cartCounts.length)
    },[])

    const handleLogout=()=>{
        localStorage.removeItem('loggedInUser');
        toast.warning('User LoggedOut Successfully...',{position:'top-center'})
        navigate('/login')
    }
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-dark position-sticky top-0 z-1'>
                <div className='container-fluid'>
                    <a href="" className='navbar-brand text-white fw-bold fs-3'>FOOD COURT</a>

                    <button type='button' className='navbar-toggler bg-white text-secondary' data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id="navbar">
                        <ul className='navbar-nav mx-auto'>
                           
                            <li className='fs-5'>
                                <Link className='text-white nav-link fw-bold' to={'/'}>Home</Link>
                            </li>
                            <li className='fs-5'>
                  <Link className='nav-link text-white fw-bold' to={'/contact'}>Contact</Link>
                            </li>
                            <li className='fs-5 position-relative'>
                  <Link className='nav-link text-white fw-bold ' to={'/cart'}>
                                Cart
                                <span className='badge bg-danger position-absolute rounded-5' style={{position:'absolute',top:'5%',left:"85%"}}>{cartCount}</span>
                                </Link>
                            </li>
                            <li className='nav-link ms-4'>
                                <input type="text" name="" id="" placeholder='Search' className='form-control' onChange={(e)=>setSearch(e.target.value)} />
                            </li>
                        </ul>
                        <div className='ms-auto'>
                            {
                                user ?
                                    (
                                        <>
                                            <button className='btn btn-primary'>
                                                <Link className='nav-link'>{user.name}</Link>
                                            </button>
                                            <button className='btn btn-primary ms-3' onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </>
                                    )
                                    :
                                    (
                                        <>
                                            <button className='btn btn-primary'>
                                                <Link className='nav-link' to={'/login'}>Login</Link>
                                            </button>
                                            <button className='btn btn-primary ms-3'>
                                                <Link className='nav-link' to={'/register'}>Register</Link>
                                            </button>
                                        </>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar
