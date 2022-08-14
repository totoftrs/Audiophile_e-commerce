import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { emptyCart } from "../actions/emptyCartAction";

const ConfirmationContainer = styled.div`
  position: absolute;
  max-width: 540px;
  width: 100%;
  height: 581px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;

  .content {
    padding: 40px;
  }
  h1 {
    width: 70%;
    font-size: 3.5vw;
    line-height: 1;
    text-transform: uppercase;
    padding: 30px 0;
  }
  .confirmation__para {
    color: #979797;
  }
  .confirmation__button {
    position: absolute;
    bottom: 40px;
    text-align: center;
    background: #d87d4a;
    color: #fff;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.7px;
    height: 48px;
    line-height: 48px;
    max-width: 444px;
    width: 100%;
    text-transform: uppercase;
    transition: 0.5s;
    text-decoration: none;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .confirmation__wrapper {
    display: flex;
    width: 100%;
    height: 140px;
    margin: 30px 0;
  }
  .confirmation__product {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #f1f1f1;
    width: 50%;
    padding: 15px;
  }
  .confirmation__product img {
    height: 50px;
    width: 50px;
  }
  .confirmation__grandTotal {
    width: 50%;
    background-color: #000;
    padding: 35px;
  }
  .confirmation__grandTotal p {
    text-transform: uppercase;
    color: #979797;
    padding-bottom: 10px;
  }
  .confirmation__grandTotal div {
    color: #fff;
    font-weight: bold;
  }
  .price,
  .confirmation__quantity {
    color: #979797;
    font-size: 1.5vw;
  }
  .name{
    font-weight: bold;
    font-size: 1.5vw;
  }
  .infos {
    display: flex;
    justify-content: space-between;
  }

  .confirmation__other{
    text-align: center;
    font-weight: bold;
    font-size: 1.5vw;
  }
`;

function Confirmation({ openModal, setOpenModal, grandTotal }) {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (params) => {
    dispatch(emptyCart(params));
  };
  console.log(product[0]);
  const handleClose = () => {
    setOpenModal(false);
  };

  var shortName = product[0]?.name?.split(" ");
  shortName.pop();
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ConfirmationContainer>
          <div className="content">
            <img
              src="assets/checkout/icon-order-confirmation.svg"
              alt="confirmation"
            />
            <h1>
              thank you<br></br> for your order
            </h1>
            <p className="confirmation__para">
              You will receive an email confirmation shorty.
            </p>
            <div className="confirmation__wrapper">
              <div className="confirmation__product">
                  <div className="infos">
                    <img src={product[0].image} alt={product[0].name} />
                    <div>
                      <p className="name">{shortName.join(" ")}</p>
                      <p className="price">$ {product[0].price}</p>
                    </div>
                    <div className="confirmation__quantity">
                      x{product[0].quantity}
                    </div>
                  </div>
                  {product.length > 1 && (
                    <div className="confirmation__other">and {product.length - 1} other item{product.length > 2 && <span>(s)</span>}</div>
                  )}
              </div>
              <div className="confirmation__grandTotal">
                <p>grand total</p>
                <div>$ {grandTotal}</div>
              </div>
            </div>
          </div>

          <Link to='/' onClick={() => removeCart(product)} className="confirmation__button">
            Back to home
          </Link>
        </ConfirmationContainer>
      </Modal>
    </>
  );
}

export default Confirmation;
