import React, {useState} from 'react'
import styled from 'styled-components'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background: #F2F2F2;
`
const Button = styled.a`
border: none;
display: inline-block !important;
font-size: 1rem;
font-weight: 700;
letter-spacing: 1px;
padding: rem 2.5rem !important;
text-transform: uppercase;
transition: .5s;
text-decoration: none;

color: #fff !important;
background-color: #D87D4A !important;
`

const Content = styled.main`
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 1190px;
width: 100%;
padding: 0 40px;

button{
    border: none;
    background-color: transparent;
}
a{
    display: block;
    padding: 2rem 0;
    color: #000;
    text-decoration: none;
}
.container{
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding-bottom: 6rem;
}
h1{
    font-size: 2rem;
    padding-bottom: 2rem;
    text-transform: uppercase;
}
h2{
    font-size: 1.3rem;
    text-transform: uppercase;
}
h3{
    font-size: 1rem;
    padding-bottom: 1rem;
    color: #d87d4a;
    text-transform: uppercase;
}
.checkout{
    max-width: 730px;
    padding: 2rem;
    background-color: #fff;
    border-radius: 10px;
    
    p{
        font-weight: 700;
        font-size: 0.8rem;
    }
}
.checkout-details{
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    justify-content: space-between;
    .checkout-input{
        display: flex;
        flex-direction: column;
        width: 20rem;
    }
    label{
        padding-bottom: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
    }
    input{
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        outline-color: #d87d4a;
        padding: 1rem 1.4rem;
    }
}
.checkout-info{
    gap: 1rem;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 3rem;
    .checkout-input:first-child{
        width: 100%;
    }
    .checkout-input{
        display: flex;
        flex-direction: column;
        width: 20rem;
    }
    label{
        padding-bottom: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
    }
    input{
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        outline-color: #d87d4a;
        padding: 1rem 1.4rem;
    }
}

.checkout-payment{
    gap: 1rem;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;
    
    .method-container{
        display: flex;
        justify-content: space-between;
    }
    .checkout-input{
        display: flex;
        flex-direction: column;
        width: 20rem;
    }
    label{
        padding-bottom: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
    }
    input{
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        outline-color: #d87d4a;
        padding: 1rem 1.4rem;
    }

    .container-radio{
        width: 20rem;
    }
    .checkout__method {
        display: flex;
        align-items: center;
        gap: 2.1rem;
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        padding: 1rem 1.4rem;
        width: 20rem;
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
    input[type=radio]:after {
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

    input[type=radio]:checked:after {
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
   
    .cart{
        display: flex;
        gap: 1rem;
    }
}
.summary{
    padding: 2rem;
    background-color: #fff;
    max-width: 350px;
    border-radius: 10px;
}
`

function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState('emoney');
  return (
    <Layout>
        <Wrapper>
            <Content>
                <button>
                     <Link to='/'>Go back</Link>
                </button>  
                <div className='container'>
                    <form className='checkout'>
                        <h1>Checkout</h1>
                        <h3>Billing details</h3>
                        <div className='checkout-details'>
                            <div className='checkout-input'>
                                <label>Name</label>
                                <input type="text" placeholder="Alexei Ward"/>
                            </div>
                            <div className='checkout-input'>
                                <label>Email Address</label>
                                <input type="text" placeholder="Alexei@mail.com"/>
                            </div>
                            <div className='checkout-input'>
                                <label>Phone Number</label>
                                <input type="text" placeholder="+1 202-555-0136"/>
                            </div>
                        </div>
                        <h3>shipping details</h3>
                        <div className='checkout-info'>
                            <div className='checkout-input'>
                                <label>Address</label>
                                <input type="text" placeholder="1137 Williams Avenue"/>
                            </div>
                            <div className='checkout-input'>
                                <label>ZipCode</label>
                                <input type="text" placeholder="10001"/>
                            </div>
                            <div className='checkout-input'>
                                <label>City</label>
                                <input type="text" placeholder="New York"/>
                            </div>
                            <div className='checkout-input'>
                                <label>Country</label>
                                <input type="text" placeholder="United States"/>
                            </div>
                        </div>
                        <h3>Payment details</h3>
                        <div className='checkout-payment'>
                            <div className='method-container'>
                                <p>Payment Method</p>
                         
                                <div className='container-radio'>
                                    <div className='checkout__method'>
                                        <input
                                            type="radio"
                                            id="emoney"
                                            value="emoney"
                                            name="paymentMethod"
                                            checked={paymentMethod === 'emoney'}
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
                                            checked={paymentMethod === 'cash'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <label htmlFor="cash" className="no-capitalize">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='cart'>
                                <div className='checkout-input'>
                                    <label>e-Money Number</label>
                                    <input type="text" placeholder="238521993"/>
                                </div>
                                <div className='checkout-input'>
                                    <label>e-Money Number PIN</label>
                                    <input type="text" placeholder="6891"/>
                                </div>
                            </div> 
                        </div>
                    </form>
                    <div className='summary'>
                        <h2>Summary</h2>
                        <Button>Continue & pay</Button>
                    </div>
                </div>
            </Content>
        </Wrapper>
    </Layout>
  )
}

export default Checkout