import React, {useState} from 'react'
import styled from 'styled-components';
import Cart from '../../Cart';
import { Link } from 'react-router-dom'


const NavBar = styled.div`
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    height: 80px;
    z-index: 999;

    button{
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

`

const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  max-width: 1190px;
  padding: 0 40px;
  margin: 0 auto;
  z-index: 1;

  @media screen  and (max-width: 960px){
    width: 100%;
    max-width: none;
    justify-content: space-between;
    padding: 0;

    .logo_menu{
      padding-left: 1.5rem;
    }
    .navbar__icon-card{
      padding-right: 1.5rem;
    }
  }

  .logo_menu{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #navbar__logo{
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 2rem;
    text-decoration: none;
  }
 
    @media screen and (max-width: 960px){
      #mobile-menu {
        padding-right: 3rem;
      }

      .navbar__toggle .bar {
        display: block;
        cursor: pointer;

        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.5 ease-in-out;
        background-color: #fff;
      }

      ul {
        display: none;
        position: absolute;
        grid-template-columns: auto;
        margin: 0;
        width: 100%;
        height: 0;
        z-index: -1;
        transition: all 0.5s ease;
        background-color: #000;
        top: 75px;
        opacity: 0;
        padding: 0 1.5rem;
      }

      ul.active {
        display: grid;
        height: 55vh;
        z-index: 99;
        transition: all 0.8s ease;
        opacity: 1;
        top: 100%;
        font-size: 1.6rem;
        background-color: #000;
        transition: all 0.5s ease;
      }
    }

`

const NavbarMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  margin: auto;
  text-transform: uppercase;

  .navbar__item{
    height: 80px;
  }
  .navbar__links{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-decoration: none;
    color: #fff;
    padding: 0 1rem;
    font-size: 0.9rem;
    font-weight: 700;
  }
  .navbar__item__footer:nth-child(4) .navbar__links{
    padding: 0;
  }
  .navbar__links:hover {
    color: #d87d4a;
  }
`


function Navbar({checkout, setCheckout}) {

const [open, setOpen] = useState(false)

const toggle = () => {
  setOpen(!open)
}

const check = () => {
  setCheckout(!checkout)
  console.log('ok', checkout)
}
console.log (checkout)
  return (
    <header>
       <NavBar>
        <NavbarContainer>
          <div className='logo_menu'>
            <div className="navbar__toggle" id="mobile-menu" onClick={toggle}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
              </div>
              <Link to="/" id="navbar__logo">
                <img src="/assets/shared/desktop/logo.svg" alt="logo"/>
              </Link>
          </div>
            <NavbarMenu className={open ? 'active' : ""}>
                <li className="navbar__item">
                    <Link to="/" className="navbar__links">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/headphones" className="navbar__links">Headphones</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/speakers" className="navbar__links">Speakers</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/earphones" className="navbar__links">Earphones</Link>
                </li>
            </NavbarMenu>
            <div className="navbar__icon-card">
              <button className="button" onClick={check}>
                <img src="/assets/shared/desktop/icon-cart.svg" alt="icon-cart"/>
              </button>      
            </div>
        </NavbarContainer>
      </NavBar>
      <div className='underline'></div>
      {checkout && <Cart checkout={checkout} />}
    

    </header>
  )
}

export default Navbar