import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import data from "../data.json";
import { addToCart } from "../actions/cartAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CardProduct = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12.5rem;
  justify-content: space-between;
  margin-bottom: 6rem;

  @media (max-width: 960px) {
    gap: 5rem;
  }
  .card__two {
    flex-direction: row-reverse;
  }
  .card__content {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
  }

  .card__para {
    text-align: center;
  }
  .card__picture {
    max-width: 40%;
  }
  img {
    height: auto;
    max-width: 100%;
  }

  .card__info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: self-start;
    max-width: 44%;
    z-index: 1;
    color: #000;
    gap: 1rem;
  }

  .card__txtIntro {
    color: #d87d4a;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 8px;
  }

  .card__h2 {
    font-size: 2.7rem;
    padding: 10px 0;
    font-weight: 700;
    text-transform: uppercase;
  }

  .card__para {
    padding-bottom: 2rem;
    color: #979797;
  }
  .card__price {
    font-weight: 700;
    font-size: 1.3rem;
    padding-bottom: 2rem;
  }
  .card__addToCart {
    background: #d87d4a;
    color: #fff;
    border: none;
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 700;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    padding: 0.8rem 1.5rem;
    text-transform: uppercase;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  .card__button__container {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }
  .card__button__select {
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 8rem;
    align-items: center;
    padding: 0.5rem 1.5rem;
    background-color: #f1f1f1;
    cursor: pointer;
  }
  .card__button__select p {
    padding: 0;
    color: #000;
  }
  .card__button__select button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const Button = styled(Link)`
  border: none;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1.5rem 3.5rem;
  text-transform: uppercase;
  transition: 0.5s;
  text-decoration: none;

  color: #fff;
  background-color: #d87d4a;
`;
function Card({ title, formatMoney }) {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [count, setCount] = useState(1);

  const findProduct = data.find((product) => product.slug == title); //headphones //earphones //speakers
  const findProductId = data.find((product) => product.id == id);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 1) return 1;
    setCount(count - 1);
  };

  if (findProductId) {
    const addTo = (params, count) => {
      dispatch(addToCart(params, count));
    };
    return (
      <CardProduct className="card">
        <picture className="card__picture">
          <source
            media="(max-width: 960px)"
            srcSet={findProductId.image.tablet}
          />
          <img
            src={findProductId.categoryImage.desktop}
            alt={findProductId.name}
          />
        </picture>
        <div className="card__info">
          {findProductId.new && (
            <div className="card__txtIntro">New product</div>
          )}
          <h2 className="card__h2">{findProductId.name}</h2>
          <p className="card__para">{findProductId.description}</p>
          <div className="card__price">{formatMoney(findProductId.price)}</div>
          <div className="card__button__container">
            <div className="card__button__select">
              <button onClick={decrement}>-</button>
              <p>{count}</p>
              <button onClick={increment}>+</button>
            </div>
            <button
              className="card__addToCart"
              onClick={() => addTo(findProductId, count)}
            >
              add to card
            </button>
          </div>
        </div>
      </CardProduct>
    );
  }
  return (
    <CardProduct className="card">
      <div className="card__content">
        <picture className="card__picture">
          <source
            media="(max-width: 960px)"
            srcSet={findProduct.categoryImage.tablet}
          />
          <img src={findProduct.categoryImage.desktop} alt={findProduct.name} />
        </picture>
        <div className="card__info">
          {findProduct.new && <div className="card__txtIntro">New product</div>}
          <h2 className="card__h2">{findProduct.name}</h2>
          <p className="card__desc">{findProduct.description}</p>
          {!findProductId && (
            <Button to={`/product/${findProduct.id}`}>See product</Button>
          )}
        </div>
      </div>
    </CardProduct>
  );
}

export default Card;
