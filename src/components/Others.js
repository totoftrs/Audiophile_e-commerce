import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1100px;
  width: 100%;
  background-color: #fff;
`;

const Content = styled.main`
  gap: 3rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 0 40px;
  @media (max-width: 960px) {
    gap: 1rem;
  }

  .others__h1 {
    text-transform: uppercase;
    font-size: 2.2rem;
    text-align: center;
    padding-bottom: 3rem;
  }
  .others__alsoLike {
    display: flex;
    gap: 2rem;

    .others__container {
      text-align: center;
    }
    .others__picture {
      width: 20rem;
      @media (max-width: 960px) {
        width: 13rem;
      }

      img {
        width: 100%;
        padding-bottom: 2rem;
      }
    }
    .others__h3 {
      text-transform: uppercase;
      font-weight: 600;
      padding-bottom: 1.4rem;
      font-size: 1.5rem;
    }
  }
`;
const Button = styled(Link)`
  border: none;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.5s;
  text-decoration: none;

  color: #fff;
  background-color: #d87d4a;
`;
function Others({ findProduct }) {
  // console.log (findProduct)
  return (
    <Wrapper>
      <Content>
        <div className="others__container">
          <h1 className="others__h1">you may also like</h1>
          <div className="others__alsoLike">
            {findProduct.others.map((other, index) => (
              <div key={index} className="others__container">
                <picture className="others__picture">
                  <source
                    media="(max-width: 960px)"
                    srcSet={other.image.tablet}
                  />
                  <img src={other.image.desktop} alt={other.slug} />
                </picture>
                <h3 className="others__h3">{other.name}</h3>
                <Button to={`/product/4`}>see product</Button>
              </div>
            ))}
          </div>
        </div>
      </Content>
    </Wrapper>
  );
}

export default Others;
