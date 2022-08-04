import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const CartContainer = styled.div`
    z-index: 5;
    background-color: #fff;
    border-radius: 8px;
    padding: 3.1rem;
    position: absolute;
    right: 6em;
    top: 15%;
    width: 440px;

    button{
        color: #d87d4a;
        text-decoration: none;
        background-color: transparent;
        border: none;
        text-decoration: underline;
    }
    .header, .priceContainer{
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
    }
    .header p{
        font-weight: 700;
        text-transform: uppercase;
    }

    .checkout{
        display: block;
        margin-top: 2.4rem;
        text-align: center;
        background: #d87d4a;
        color: #fff;
        border: none;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 0.7px;
        padding: 1rem 2.5rem;
        text-transform: uppercase;
        transition: .5s;
        text-decoration: none;
    }
`
function Cart() {

    const data = useSelector(state => state)
    console.log("data", data)
  return (
    <CartContainer>
        <div className='header'>
            <p>Cart (0)</p>
            <button>Remove all</button>
        </div>
        <div className='products'></div>
        <div className='priceContainer'>
            <p>total</p>
            <p className='price'>10</p>
        </div>
        <Link to='/checkout' className='checkout'>checkout</Link>
    </CartContainer>
  )
}

export default Cart