import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
    margin: 0 auto;
    max-width: 1100px;
    width: 100%;
    background-color: #fff;
`

const Content = styled.main`
    gap: 3rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 3rem 0 3rem 0rem;

h1{
    text-transform: uppercase;
    font-size: 2.2rem;
    text-align: center;
    padding-bottom: 3rem;
}
.container__alsoLike{
    display: flex;
    gap: 2rem;

    .also{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    picture{
        width: 20rem;

        img{
            width: 100%;
        }
    }
    h3{
        text-transform: uppercase;
        font-weight: 600;
        padding: 2rem;
        font-size: 1.5rem;
    }
}

`
const Button = styled.a`
    border: none;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 1.5rem 3.5rem;
    text-transform: uppercase;
    transition: .5s;
    text-decoration: none;

    color: #fff;
    background-color: #D87D4A;
`
function Others({findProduct}) {
  return (
    <Wrapper>
        <Content>
            <div className='container__others'>
                <h1>you may also like</h1>
                <div className='container__alsoLike'>
                    {
                       findProduct.others.map((other, index)=> (
                        <div key={index} className="also">
                            <picture>
                                <img src={other.image.desktop} alt={other.slug}/>
                            </picture>
                            <h3>{other.name}</h3>
                            <Button>see product</Button>
                        </div>
                       ))
                    }
                </div>
            </div>
        </Content>
    </Wrapper>
  )
}

export default Others