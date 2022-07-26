import React from 'react'
import styled from 'styled-components';

const Features = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    margin-bottom: 4rem;
    @media (max-width: 960px){
        flex-direction: column;
        gap: 2rem;
        margin-bottom: 8rem;

    }

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
    @media (max-width: 960px){
        width: 100%;
    }
}
.in_the_box{
    width: 40%;
    @media (max-width: 960px){
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        width: 100%;
    }

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
`

function FeaturesIncludes({findProduct}) {
  return (
        <Features>
            <div className='features'>
                <h2>features</h2>
                <p>{findProduct.features}</p>
            </div> 
                <div className='in_the_box'>
                <h2>in the box</h2>
                <ul>
                    {findProduct.includes.map((a, index)=>(
                    <li key={index}><span className='quantity'>{a.quantity}x</span><span>{a.item}</span></li>
                    ))}
                </ul>             
            </div> 
        </Features>
  )
}

export default FeaturesIncludes