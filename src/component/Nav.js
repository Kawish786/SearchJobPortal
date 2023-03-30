import React from 'react'
import "../component/Nav.css"
import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigation=useNavigate()
  const handleHome=()=>{
    navigation('/')
  }
  const handleEngineer=()=>{
    navigation('/engineering')
  }
  const handleManagement=()=>{
    navigation('/management')
  }
  const handleMarket=()=>{
    navigation('/marketing')
  }
  const handleSale=()=>{
    navigation('/sales')
  }
  const handleContact=()=>{
    navigation('/contact')
  }
  
  return (
    <>
    <div className='main'>
      
    <div className='navbar-wrapper 'id="navbarNav">
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark ' >
            <ul className='nav me-auto' >
                <li className='nav-item'><label className='nav-link link-light' onClick={handleHome}>Home</label></li>
                <li className='nav-item'><label className='nav-link link-light' onClick={handleEngineer}>Engineering</label></li>
                <li className='nav-item'><label className='nav-link link-light' onClick={handleManagement}>Management</label></li>
                <li className='nav-item'><label className='nav-link link-light' onClick={handleMarket}>Marketing</label></li>
                <li className='nav-item'><label className='nav-link link-light' onClick={handleSale}>Sales</label></li>
                <li className='nav-item'><label className='nav-link link-light' onClick={handleContact}>Contact Us</label></li>
            </ul>
            <ul className="nav">
                <li className="nav-item"><label className="nav-link link-light px-2">Login</label></li>
                <li className="nav-item"><label className="nav-link link-light px-2" >Sign up</label></li>
            </ul>
        </nav>
    </div>
    <div className='header'>
    <header  className="py-3 mb-4 border-bottom bg-dark ">
    <div className="container d-flex flex-wrap justify-content-center">
      <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4"> SearchJob.com</span>
      </a>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>
  </header>
    </div>
    
    
  
    </div>
    </>
  )
}

export default Nav