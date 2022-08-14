import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Summary from "../components/Summary";
import Confirmation from "../components/Confirmation";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f2f2f2;
`;

const Content = styled.main`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1190px;
  width: 100%;
  padding: 0 40px;

  button {
    border: none;
    background-color: transparent;
  }
  a {
    display: block;
    padding: 2rem 0;
    color: #000;
    text-decoration: none;
  }
  .checkout__container {
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 6rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .summary {
    @media (max-width: 768px) {
      width: 100%;
      margin: 0;
      margin-top: 20px;
    }
  }
  h1 {
    font-size: 2rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.3rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 1rem;
    padding-bottom: 1rem;
    color: #d87d4a;
    text-transform: uppercase;
  }
  .checkout__form {
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;

    p {
      font-weight: 700;
      font-size: 0.8rem;
    }
  }
  .checkout__details {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    justify-content: space-between;
    .checkout__input {
      display: flex;
      flex-direction: column;
      width: 47%;
    }
    label {
      padding-bottom: 0.5rem;
      font-weight: 700;
      font-size: 0.8rem;
    }
    input {
      border: 1px solid #cfcfcf;
      border-radius: 8px;
      outline-color: #d87d4a;
      padding: 1rem 1.4rem;
    }
  }
  .checkout__info {
    gap: 1rem;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    .checkout__input:first-child {
      width: 100%;
    }
    .checkout__input {
      display: flex;
      flex-direction: column;
      width: 47%;
    }
    label {
      padding-bottom: 0.5rem;
      font-weight: 700;
      font-size: 0.8rem;
    }
    input {
      border: 1px solid #cfcfcf;
      border-radius: 8px;
      outline-color: #d87d4a;
      padding: 1rem 1.4rem;
    }
  }

  .checkout__payment {
    gap: 1rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    .method-container {
      display: flex;
      justify-content: space-between;
    }
    .checkout__input {
      display: flex;
      flex-direction: column;
      width: 47%;
    }
    label {
      padding-bottom: -0.5rem;
      font-weight: 700;
      font-size: 0.8rem;
    }
    input {
      border: 1px solid #cfcfcf;
      border-radius: 8px;
      outline-color: #d87d4a;
      padding: 1rem 1.4rem;
    }

    .container-radio {
      width: 47%;
    }
    .checkout__method {
      display: flex;
      align-items: center;
      gap: 2.1rem;
      border: 1px solid #cfcfcf;
      border-radius: 8px;
      padding: 1rem 1.4rem;
      width: 100%;
      margin-bottom: 1.6rem;
    }
    .checkout__method:focus-within {
      border: 1px solid #d87d4a;
    }
    .checkout__form-error {
      border-color: #cd2c2c;
    }
    .checkout__label-error {
      color: #cd2c2c;
    }
    input[type="radio"]:after {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      top: -2px;
      left: -1px;
      position: relative;
      background-color: #f1f1f1;
      content: "";
      display: inline-block;
      visibility: visible;
      border: 2px solid #cfcfcf;
    }

    input[type="radio"]:checked:after {
      width: 15px;
      height: 15px;
      border-radius: 15px;
      top: -2px;
      left: -1px;
      position: relative;
      background-color: #d87d4a;
      content: "";
      display: inline-block;
      visibility: visible;
      border: 2px solid #cfcfcf;
    }

    .checkout__cart {
      display: flex;
      gap: 1rem;
    }
  }
`;

function Checkout() {
  const cart = useSelector((state) => state.cart);

  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);

    const [
      name,
      email,
      phone,
      address,
      zipcode,
      city,
      country,
      emoney,
      cash,
      number,
      numberPin,
    ] = e.target;
  };
  let total = 0;
  let shipping = 50;
  let vat = 1079;
  let grandTotal = 0;

  for (var n of cart) {
    total += n.price * n.quantity;
  }

  const formatMoney = (n) => {
    const lengthPrice = `${n}`.length;
    if (lengthPrice === 4) {
      return (n / 1000).toFixed(3);
    }
    return n;
  };

  if (total == 0) {
    grandTotal = 0;
  } else {
    grandTotal = formatMoney(total + shipping);
  }

  const [paymentMethod, setPaymentMethod] = useState("emoney");
  return (
    <Layout>
      <Wrapper>
        <Content>
          <button>
            <Link to="/">Go back</Link>
          </button>
          <form className="checkout__container" onSubmit={handleSubmit}>
            <div className="checkout__form">
              <h1>Checkout</h1>
              <h3>Billing details</h3>
              <div className="checkout__details">
                <div className="checkout__input">
                  <label>Name</label>
                  <input type="text" placeholder="Alexei Ward" required />
                </div>
                <div className="checkout__input">
                  <label>Email Address</label>
                  <input type="email" placeholder="Alexei@mail.com" required />
                </div>
                <div className="checkout__input">
                  <label>Phone Number</label>
                  <input type="number" placeholder="+1 202-555-0136" required />
                </div>
              </div>
              <h3>shipping details</h3>
              <div className="checkout__info">
                <div className="checkout__input">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    required
                  />
                </div>
                <div className="checkout__input">
                  <label>ZipCode</label>
                  <input type="text" placeholder="10001" required />
                </div>
                <div className="checkout__input">
                  <label>City</label>
                  <input type="text" placeholder="New York" required />
                </div>
                <div className="checkout__input">
                  <label>Country</label>
                  <input type="text" placeholder="United States" required />
                </div>
              </div>
              <h3>Payment details</h3>
              <div className="checkout__payment">
                <div className="method-container">
                  <p>Payment Method</p>

                  <div className="container-radio">
                    <div className="checkout__method">
                      <input
                        type="radio"
                        id="emoney"
                        value="emoney"
                        name="paymentMethod"
                        checked={paymentMethod === "emoney"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label htmlFor="emoney" className="no-capitalize">
                        e-Money
                      </label>
                    </div>
                    <div className="checkout__method">
                      <input
                        type="radio"
                        id="cash"
                        value="cash"
                        name="paymentMethod"
                        checked={paymentMethod === "cash"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      />
                      <label htmlFor="cash" className="no-capitalize">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className="checkout__cart">
                  <div className="checkout__input">
                    <label>e-Money Number</label>
                    <input type="text" placeholder="238521993" />
                  </div>
                  <div className="checkout__input">
                    <label>e-Money Number PIN</label>
                    <input type="text" placeholder="6891" />
                  </div>
                </div>
              </div>
            </div>
            <Summary
              total={total}
              grandTotal={grandTotal}
              vat={vat}
              shipping={shipping}
              formatMoney={formatMoney}
            />
          </form>
        </Content>
      </Wrapper>
      {openModal && (
        <Confirmation
          setOpenModal={setOpenModal}
          openModal={openModal}
          grandTotal={grandTotal}
        />
      )}
    </Layout>
  );
}

export default Checkout;
