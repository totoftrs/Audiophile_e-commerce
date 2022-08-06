import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1190px;
  width: 100%;
  padding: 0 40px;
  background-color: #fff;
`;

const Content = styled.main`
  gap: 4rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 3rem 0 3rem 0rem;

  @media (max-width: 960px) {
    gap: 1.1rem;
    justify-content: space-between;
  }

  .products {
    position: relative;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .products:after {
    background: #f1f1f1;
    bottom: -25px;
    content: "";
    height: 224px;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
  }
  .imgProduct {
    max-width: 100%;
    height: auto;
  }
  .products__figure {
    transform: translateY(50px);
  }
  .products__h3 {
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
  }
  span {
    color: #000;
    font-weight: 700;
    margin-right: 1.3rem;
    opacity: 0.5;
    text-transform: uppercase;
  }
`;
function Products() {
  return (
    <Wrapper>
      <Content>
        <div className="products">
          <figure className="products__figure">
            <img
              src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="headphones"
              className="imgProduct"
            />
          </figure>
          <h3 className="products__h3">Headphones</h3>
          <Link className="products__btn-shop" to="/headphones">
            <span>shop</span>
            <img
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="chevron-right"
            />
          </Link>
        </div>
        <div className="products">
          <figure className="products__figure">
            <img
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="speakers"
              className="imgProduct"
            />
          </figure>
          <h3 className="products__h3">Speakers</h3>
          <Link className="products__btn-shop" to="/headphones">
            <span>shop</span>
            <img
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="chevron-right"
            />
          </Link>
        </div>
        <div className="products">
          <figure className="products__figure">
            <img
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="earphones"
              className="imgProduct"
            />
          </figure>
          <h3 className="products__h3">Earphones</h3>
          <Link className="products__btn-shop" to="/earphones">
            <span>shop</span>
            <img
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt="chevron-right"
            />
          </Link>
        </div>
      </Content>
    </Wrapper>
  );
}

export default Products;
