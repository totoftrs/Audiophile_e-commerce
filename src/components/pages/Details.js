import React from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';
import Layout from '../Layout/Layout'
import data from '../../data.json'
import Card from '../Card';
import Products from '../Products';
import Profile from '../Profile';
import Gallery from '../Gallery';
import FeaturesIncludes from '../FeaturesIncludes';
import Others from '../Others';

const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1110px;
    margin: 0 auto;

    .back{
        position: relative;
        left: -32rem;
        padding: 2rem;
        list-style: none;
        text-decoration: none;
        color: #979797;
    }
    .card{
        padding-top: 0;
    }
    .container_includes{
        display: flex;
        justify-content: space-between;
        gap: 8rem;
        margin: 2rem 0;

        h2{
            text-transform: uppercase;
            padding: 2.5rem 0;
        }
        p{
            color: #979797;
        }
    }
    .features{
        width: 60%;
    }
    .in_the_box{
        width: 40%;

        ul{
            list-style: none;
        }
        span{
            color: #979797;
        }
        span:first-child{
            color: #D87D4A;
            font-weight: 600;
        }
        span:nth-child(2){
            padding: 0 1rem;
        }
    }
    .gallery{
        display: flex;
        gap: 1rem;
        margin: 4rem 0;

        .bloc_1{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        picture{
            border-radius: 20px;
            overflow: hidden;
        }
    }
`
function Details() {

    const {id} = useParams()
    const findProduct = data.find(product => product.id == id)

    const formatMoney = (n) => {
        const lengthPrice = `${n}`.length
        if(lengthPrice === 4){
            return "$ " + (n / 1000).toFixed(3)
        }
        return n
    }

  return (
    <>
    <Layout>
        <Wrapper>
            <a href={`/${findProduct.category}`} className="back">Go Back</a>
            <Card formatMoney={formatMoney}/>   
            <FeaturesIncludes findProduct={findProduct} />
            <Gallery findProduct={findProduct} />
        </Wrapper>
        <Others findProduct={findProduct}/>
        <Products />
        <Profile />
    </Layout>
  
    </>
  
  )
}

export default Details