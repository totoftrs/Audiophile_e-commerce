import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1190px;
  width: 100%;
  padding: 0 40px;
  padding-top: 40px;
  background-color: #fff;

  @media (max-width: 375px) {
      padding: 0 20px;
    }
`;

const Content = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 3rem 0 3rem 0rem;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }

  .products {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin: 0 6px;
    @media (max-width: 450px) {
    margin-bottom: 3rem;
  }
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 60%;
    background: #f1f1f1;
    bottom: 0;
  }

  .imgProduct {
    max-width: 100%;
    height: auto;
  }
  .products__figure {
    z-index: 1;
    transform: translateY(-20px);
  }
  .products__h3 {
    font-size: max(1vw, 1.2rem);
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    z-index: 1;
    position: absolute;
    top: 55%;
    left: 0;
    right: 0;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1.9vw;
    }
    @media (max-width: 450px) {
      font-size: 4.5vw;
    }
  }
  span {
    color: #000;
    font-weight: 700;
    margin-right: 1.3rem;
    opacity: 0.5;
    text-transform: uppercase;
  }
  .products__btn-shop {
    position: absolute;
    top: 73%;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    font-size: max(1vw, 1.1rem);
    text-decoration: none;
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 1.6vw;
    }
    @media (max-width: 450px) {
      font-size: 4vw;
    }
  }
  .products__btn-shop img {
    height: 0.8vw;
    @media (max-width: 450px) {
      height: 2vw;
    }
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

          <div className="bg">
            <h3 className="products__h3">Headphones</h3>
            <Link className="products__btn-shop" to="/headphones">
              <span>shop</span>
              <img
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="chevron-right"
              />
            </Link>
          </div>
        </div>
        <div className="products">
          <figure className="products__figure">
            <img
              src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="speakers"
              className="imgProduct"
            />
          </figure>

          <div className="bg">
            <h3 className="products__h3">Speakers</h3>
            <Link className="products__btn-shop" to="/headphones">
              <span>shop</span>
              <img
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="chevron-right"
              />
            </Link>
          </div>
        </div>
        <div className="products">
          <figure className="products__figure">
            <img
              src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="earphones"
              className="imgProduct"
            />
          </figure>

          <div className="bg">
            <h3 className="products__h3">Earphones</h3>
            <Link className="products__btn-shop" to="/earphones">
              <span>shop</span>
              <img
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="chevron-right"
              />
            </Link>
          </div>
        </div>
      </Content>
    </Wrapper>
  );
}

export default Products;
