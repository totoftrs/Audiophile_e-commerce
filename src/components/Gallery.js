import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  margin-bottom: 4rem;

  .gallery {
    display: flex;
    gap: 2rem;
  }

  .gallery__bloc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .gallery__picture img {
    border-radius: 6px;
    height: auto;
    max-width: 100%;
  }
`;

function Gallery({ findProduct }) {
  return (
    <GalleryContainer>
      <div className="gallery">
        <div className="gallery__bloc">
          <picture className="gallery__picture">
            <source
              media="(max-width: 960px)"
              srcSet={findProduct.gallery.first.tablet}
            />
            <img
              src={findProduct.gallery.first.desktop}
              alt={findProduct.name}
            />
          </picture>
          <picture className="gallery__picture">
            <source
              media="(max-width: 960px)"
              srcSet={findProduct.gallery.second.tablet}
            />
            <img
              src={findProduct.gallery.second.desktop}
              alt={findProduct.name}
            />
          </picture>
        </div>
        <picture className="gallery__picture">
          <source
            media="(max-width: 960px)"
            srcSet={findProduct.gallery.third.tablet}
          />
          <img src={findProduct.gallery.third.desktop} alt={findProduct.name} />
        </picture>
      </div>
    </GalleryContainer>
  );
}

export default Gallery;
