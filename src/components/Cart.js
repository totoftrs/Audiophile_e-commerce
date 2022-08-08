import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartContainer = styled.div`
  z-index: 5;
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  position: absolute;
  right: 6em;
  top: 15%;
  width: 377px;

  button {
    color: #d87d4a;
    text-decoration: none;
    background-color: transparent;
    border: none;
    text-decoration: underline;
  }
  .cart__header,
  .cart__footer {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .cart__header__para {
    font-weight: 700;
    text-transform: uppercase;
  }

  .cart__footer__checkout {
    display: block;
    text-align: center;
    background: #d87d4a;
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.7px;
    height: 48px;
    line-height: 48px;
    width: 313px;
    min-width: 271px;
    text-transform: uppercase;
    transition: 0.5s;
    text-decoration: none;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .cart__footer__para{
    text-transform: uppercase;
    color: #979797;
  }
  .cart__footer__priceTotal {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .cart__container{
    margin-bottom: 40px;
  }
  .cart__content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .cart__infos {
    display: flex;
    align-items: center;
  }
  .cart__name {
    font-weight: bold;
  }
  img {
    width: 64px;
    height: 64px;
    margin-right: 15px;
    border-radius: 8px;
  }
  .cart__button__container {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
  }
  .cart__button__select {
    display: flex;
    position: relative;
    justify-content: space-evenly;
    width: 96px;
    height: 32px;
    align-items: center;
    background-color: #f1f1f1;
    cursor: pointer;
  }
  .cart__button__para {
    padding: 0;
    color: #000;
    font-weight: bold;
  }
  .cart__button__select button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
  }
`;
function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log("-----", cart);
  // const [increment, setIncrement] = useState(cart.quantity);

  return (
    <CartContainer>
      <div className="cart__header">
        <p className="cart__header__para">Cart ({cart.length})</p>
        <button className="cart__button">Remove all</button>
      </div>
      <div className="cart__container">
        {cart.map((elem) => {
     
        var str=elem.name.split(' ');
        var lastword=str.pop();
          return (
            <div className="cart__content" key={elem.id}>
              <div className="cart__infos">
                <img src={elem.image} alt={elem.name} />
                <div>
                  <div className="cart__name">{str.join(' ')}</div>
                  <div className="cart__priceElem">$ {elem.price}</div>
                </div>
              </div>
              <div className="cart__button__container">
                <div className="cart__button__select">
                  <button className="cart__button__less">-</button>
                  <p className="cart__button__para">{elem.quantity}</p>
                  <button className="cart__button__more">+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart__footer">
        <p className="cart__footer__para">total</p>
        <p className="cart__footer__priceTotal">$ 10</p>
      </div>
      <Link to="/checkout" className="cart__footer__checkout">
        checkout
      </Link>
    </CartContainer>
  );
}

export default Cart;
