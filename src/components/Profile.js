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
  gap: 3rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 0 7rem 0rem;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }

  .profile__h2 {
    text-transform: uppercase;
    font-size: 2.7rem;
    line-height: 2.9rem;
    letter-spacing: 1.4px;
    padding-bottom: 2rem;
  }
  span {
    color: #d87d4a;
  }
  .profile__para {
    color: #979797;
  }
  img {
    border-radius: 8px;
    /* max-width: 100%; */
  }
  .profile__description {
    @media (max-width: 960px) {
      text-align: center;
      width: 80%;
    }
  }
`;
function Profile() {
  return (
    <Wrapper>
      <Content>
        <div className="profil__description">
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
            media="(max-width: 962px)"
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
