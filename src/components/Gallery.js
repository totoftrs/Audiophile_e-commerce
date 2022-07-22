import React from 'react'

function Gallery({findProduct}) {
  return (
    <div className='gallery'>
        <div className='bloc_1'>
            <picture>
                <img src={findProduct.gallery.first.desktop} alt="toto" />
            </picture>
            <picture>
                <img src={findProduct.gallery.second.desktop} alt="toto" />
            </picture>
        </div>
        <picture>
            <img src={findProduct.gallery.third.desktop} alt="toto" />
        </picture>      
    </div>
  )
}

export default Gallery