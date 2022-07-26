import React from 'react'
import styled from 'styled-components';


const GalleryContainer = styled.div`
    margin-bottom: 4rem;

    .gallery{
        display: flex;
        gap: 2rem;
    }

    .bloc_1{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    picture img{
        border-radius: 6px;
        height: auto;
        max-width: 100%;
    }
`

function Gallery({findProduct}) {
  return (
    <GalleryContainer>
        <div className='gallery'>
            <div className='bloc_1'>
                <picture>
                    <source media="(max-width: 960px)" srcSet={findProduct.gallery.first.tablet} />
                    <img src={findProduct.gallery.first.desktop} alt={findProduct.name} />
                </picture>
                <picture>
                    <source media="(max-width: 960px)" srcSet={findProduct.gallery.second.tablet} />
                    <img src={findProduct.gallery.second.desktop} alt={findProduct.name} />
                </picture>
            </div>
            <picture>
                <source media="(max-width: 960px)" srcSet={findProduct.gallery.third.tablet} />
                <img src={findProduct.gallery.third.desktop} alt={findProduct.name} />
            </picture>     
        </div>
         
    </GalleryContainer>
  )
}

export default Gallery