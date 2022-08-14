import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  margin-left: 20px;

  .summary__container {
    padding: 20px 0;
  }
  .summary__btn {
    padding: 0;
    font-size: 14px;
    width: 24.3vw;
    height: 48px;
    line-height: 48px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .summary__btn:disabled, .summary__btn[disabled]{
    background-color: gray !important;
    color: rgba(16, 16, 16, 0.3) !important;
  }
  .summary__content {
    padding-bottom: 20px;
  }
  .summary__content,
  .summary__content div {
    display: flex;
    justify-content: space-between;
  }
  .summary__content img {
    height: 64px;
    width: 64px;
  }
  .summary__infos {
    display: flex;
    flex-direction: column;
    justify-content: unset !important;
    padding-left: 10px;
  }
  .summary__name {
    font-weight: bold;
  }
  .summary__price,
  .summary__quantity {
    color: #cfcfcf;
  }
  .summary__container__detail,
  .summary__container__grandTotal {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  .summary__container__grandTotal {
    padding: 20px 0;
  }
  .summary__container__grandTotal .price {
    color: #d87d4a;
  }
  .summary__txt {
    color: #cfcfcf;
  }
  .price {
    font-weight: bold;
  }
  button {
    border: none;
    display: inline-block !important;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.5s;
    text-decoration: none;
    color: #fff !important;
    background-color: #d87d4a !important;
  }

`;

function Summary({ total, shipping, vat, grandTotal, formatMoney }) {
  const cart = useSelector((state) => state.cart);
  return (
    <Wrapper className="summary">
      <h2>Summary</h2>
      <div className="summary__container">
        {cart.map((product) => {
          const name = product.name.split(" ");
          name.pop();
          const shortName = name.join(" ");

          return (
            <div className="summary__content" key={product.id}>
              <div>
                <img src={product.image} alt={product.name} />
                <div className="summary__infos">
                  <div className="summary__name">{shortName}</div>
                  <div className="summary__price">
                    $ {formatMoney(product.price)}
                  </div>
                </div>
              </div>
              <div className="summary__quantity">x {product.quantity}</div>
            </div>
          );
        })}
      </div>
      <div className="summary__detail">
        <div className="summary__container__detail">
          <div className="summary__txt">TOTAL</div>
          <div className="summary__priceTotal price">
            $ {formatMoney(total)}
          </div>
        </div>
        <div className="summary__container__detail">
          <div className="summary__txt">SHIPPING</div>
          <div className="summary__shipping price">
            $ {total > 0 ? shipping : "0"}
          </div>
        </div>
        <div className="summary__container__detail">
          <div className="summary__txt">VAT (INCLUDED)</div>
          <div className="summary__vat price">$ {total > 0 ? formatMoney(vat) : "0"}</div>
        </div>
        <div className="summary__container__grandTotal">
          <div className="summary__txt"> GRAND TOTAL</div>
          <div className="summary__grandTotal price">$ {grandTotal}</div>
        </div>
      </div>

      <button className="summary__btn" type="submit" disabled={total == 0}>
        Continue & pay
      </button>
    </Wrapper>
  );
}

export default Summary;
