import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  max-width: 1190px;
  padding: 0 40px;
  width: 100%;
  background-color: #fff;
  margin: auto;
`;

const Content = styled.main`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 7rem 0 7rem 0rem;
  display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  .profile__h2 {
    text-transform: uppercase;
    font-size: 2.7rem;
    line-height: 1.2;
    letter-spacing: 1.4px;
    padding-bottom: 2rem;

    @media (max-width: 375px) {
      font-size: 6.5vw;
    }
  }
  span {
    color: #d87d4a;
  }
  .profile__para {
    color: #979797;
  }
  img {
    border-radius: 8px;
    height: auto;
    max-width: 100%;
  }
  .profile__description {
    max-width: 22rem;
    @media (max-width: 768px) {
      text-align: center;
      max-width: 40rem;
    }
  }
  .profile__picture{
    @media (max-width: 768px) {
      padding-bottom: 20px;
    }
  }
`;
function Profile() {
  return (
    <Wrapper>
      <Content>
        <div className="profile__description">
          <h2 className="profile__h2">
            Bringing you the <span>best</span> audio gear
          </h2>
          <p className="profile__para">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <picture className="profile__picture">
        <source
            media="(max-width: 375px)"
            srcSet="/assets/shared/mobile/image-best-gear.jpg"
          />
          <source
            media="(max-width: 768px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
          />
       
          <img
            src="/assets/shared/desktop/image-best-gear.jpg"
            alt="best-gear"
          />
        </picture>
      </Content>
    </Wrapper>
  );
}
export default Profile;
