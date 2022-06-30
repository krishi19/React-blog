import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link,useHistory } from 'react-router-dom';
import './Navbar.css';
import {useContext} from "react"
import { UserContext } from '../context/UserContext';
function Navbar() {
  const history=useHistory()
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
const[user,setUser]=useContext(UserContext)


const Logout=()=>{
  setUser(null)
  history.push("/login")
}

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Blogify
            <i class='fab fa-blogger' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {user &&   <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>}
          
          {user &&   <li className='nav-item'>
              <Link
                to='/addblog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                AddBlog
              </Link>
            </li>} 
         
            {/* <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li> */}
  {user && <li className='nav-item'>
              <Link
                
                className='nav-links'
                onClick={Logout}
              >
                LOGOUT
              </Link>
            </li>}

           {user?null:<li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                LOGIN
              </Link>
            </li>} 

            {user?null:  <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                SIGNUP
              </Link>
            </li>}
          
            {/* <li>
              <Link
                to='/Form'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
     
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
