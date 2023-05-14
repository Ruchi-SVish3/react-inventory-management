import React from 'react'
import './sidebar.css'
import {  useNavigate } from 'react-router-dom';

function Product() {
  const name = localStorage.getItem('useremail')
  console.log(name);
  const navigate = useNavigate()
  
  const handleClick = ()=>{
    localStorage.clear()
    navigate('/login')
  }

return (
    <>
     <div className="sidebar">
      <h3>Menu</h3>
<a href='/dashboard' >Dashboard</a>
<a href='/user'>User</a>
<a  className="active">Product</a>
<a href="/order">Order</a>
<a href="/customer">Customers</a>
<span>{name}</span><br/><label onClick={handleClick}>Logout </label>
</div>

<div class="content">
  <h2>Products</h2>
  <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
  <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
  <h3>Resize the browser window to see the effect.</h3>
</div>
</>
  )
}

export default Product