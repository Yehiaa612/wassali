import jwtDecode from 'jwt-decode';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function Navbar(props) {
  const token = localStorage.getItem('userToken');
 let role  = token ? jwtDecode(token).role : null
  return (
      <>

<section className="navbar">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div id="circle"></div> &nbsp;
  <NavLink  to="/home" className="navbar-brand" >Wasally</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    {
            props.loginUser ?
            <>
      <li className="nav-item active">
      <NavLink to="/home" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/trip" className="nav-link" >Trips</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/request" className="nav-link" >Shipments</NavLink>
      </li>
      {role ==='user' ?
      <li className="nav-item">
        <NavLink to="/profile" className="nav-link" >Profile</NavLink>
      </li>
      :
      <li className="nav-item">
      <NavLink to="/profile2" className="nav-link" >Profile</NavLink>
    </li>
    }
      <li className="nav-item">
      <NavLink to="/work" className="nav-link" >Work</NavLink>
      </li>
      </>:''
      }
    </ul>
    
  </div>
  {
            props.loginUser?
            <>
           <button onClick={props.logOut} className="btn btn-outline-success " type="submit">Log out</button>  
            </>:<Link to="/register"><button className="btn btn-outline-success " type="submit">Create Account</button></Link>
          }

</nav>

</section>
      </>
    )
  }

