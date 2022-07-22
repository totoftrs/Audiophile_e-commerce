import React from 'react'

function FeaturesIncludes({findProduct}) {
  return (
        <div className='container_includes'>
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
        </div>
  )
}

export default FeaturesIncludes