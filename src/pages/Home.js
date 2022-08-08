import React from "react";
import styled from "styled-components";
import Products from "../components/Products";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";

const SectionHero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #191919;
  width: 100%;
  margin: 0 auto;

  .hero__h1 {
    font-size: min(5vw, 4rem);
    padding: 10px 0;
    @media screen and (max-width: 768px) {
      font-size: 4rem;
      line-height: 4rem;
    }
  }

  .hero__para {
    font-size: 1rem;
    padding: 10px 0;
    color: #4c4c4c;
  }

  .hero__figure {
    position: relative;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
      transform: translateX(0rem);
    }
  }

  img {
    width: 200%;
    margin-right: 25vw;
    @media screen and (max-width: 768px) {
      margin-right: 60vw;
    }
  }

  .hero__infos {
    z-index: 1;
    color: #fff;
    padding: 20px 4rem 20px 0rem;

    @media screen and (max-width: 768px) {
      position: absolute;
      margin: 0 auto;
      width: 30rem;
      text-align: center;
      padding: 0;
    }
  }

  .hero__txtIntro {
    color: #4c4c4c;
    text-transform: uppercase;
    letter-spacing: 8px;
  }
`;
const ContentHero = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1190px;
  padding: 0 40px;
  width: 100%;
`;
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1190px;
  padding: 0 40px;
  margin: 0 auto;

  .speaker__container {
    background-color: #d87d4a;
    background-image: url("./assets/home/desktop/pattern-circles.svg");
    background-position: -8rem -1rem;
    background-size: 75%;
    background-repeat: no-repeat;
    border-radius: 8px;
    color: #fff;
    justify-content: space-around;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 5rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .yx1__container {
    height: 320px;
    grid-gap: 3rem;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    background-color: #fff;

    @media (max-width: 768px) {
      flex: 1.1;
      gap: 1rem;
    }
   
    .yx1-image{
      height: 320px;
      img{
        height: 100%;
      }
    }
    img {
      height: auto;
      width: 100%;
      border-radius: 8px;
    }
    .yx1__title {
      font-size: 2rem;
    }

    a {
      background-color: transparent;
      border: 1px solid #000;
      color: #000;
    }
  }

  .zx7__speaker__container {
    background-color: #979797;
    background: url("./assets/home/desktop/image-speaker-zx7.jpg") no-repeat;
    margin: 3.4rem 0;
    color: #fff;
    justify-content: left;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    color: #000;
  }

  .zx9__description {
    color: #fff;
    max-width: 21.9rem;
    padding: 10rem 0;
    padding-bottom: 3rem;
  }

  .zx7__description {
    padding: 4rem;
  }

  .yx1__description {
    background-color: #f1f1f1;
    height: 100%;
    a{
      margin-left: 30px;
    }
  }
  .yx1__title{
    margin-top: 70px;
    margin-left: 30px;
  }

  .zx9__title,
  .zx7__title,
  .yx1__title {
    text-transform: uppercase;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 1.6rem;
  }

  .txt {
    margin-bottom: 1.6rem;
  }

  a {
    border: none;
    display: inline-block;
    font-size: 0.8rem;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1px;
    height: 48px;
    width: 160px;
    text-transform: uppercase;
    transition: 0.5s;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    text-align: center;
  }

  .zx7__btn {
    color: #000;
    background-color: transparent;
    border: 1px solid #000;
  }

  .zx9__picture {
    max-width: 24rem;
    transform: translateY(78px);

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  width: 100%;
`;

const Button = styled(Link)`
  border: none;
  display: inline-block;
  width: 160px;
  height: 48px;
  font-size: 0.8rem;
  line-height: 48px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.5s;
  text-decoration: none;
  text-align: center;
  color: #fff;
  background-color: #d87d4a;
`;
function Home() {
  return (
    <>
      <SectionHero>
        <ContentHero>
          <div className="hero__infos">
            <div className="hero__txtIntro"> New product</div>
            <h1 className="hero__h1">XX99 Mark II Headphones</h1>
            <p className="hero__para">
              Experience natural, lifelike audio and exceptional
              <br />
              build quality made for the passionate music
              <br />
              enthusiast.
            </p>
            <Button to="/product/4">See product</Button>
          </div>
          <figure className="hero__figure">
            <img
              src="/assets/home/desktop/image-hero.jpg"
              alt="XX99 Mark II Headphones"
            />
          </figure>
        </ContentHero>
      </SectionHero>
      <Products />
      <Wrapper>
        <Content className="speaker__container">
          <picture className="zx9__picture">
            <img
              src="./assets/home/desktop/image-speaker-zx9.png"
              alt="speaker-zx9"
            />
          </picture>
          <div className="zx9__description">
            <div className="zx9__title">
              {" "}
              ZX9
              <br />
              speaker
            </div>
            <div className="txt">
              {" "}
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </div>
            <Link to="/product/6">See product</Link>
          </div>
        </Content>
        <Content className="zx7__speaker__container">
          <div className="zx7__description">
            <div className="zx7__title">
              {" "}
              ZX7
              <br />
              speaker
            </div>
            <Link to="/product/5" className="zx7__btn">
              See product
            </Link>
          </div>
        </Content>
        <Content className="yx1__container">
          <picture className="yx1-image">
            <source
              media="(max-width: 962px)"
              srcSet="./assets/home/tablet/image-earphones-yx1.jpg"
            />
            <img
              src="./assets/home/desktop/image-earphones-yx1.jpg"
              alt="yx1__earphones"
            />
          </picture>
          <div className="yx1__description">
            <div className="yx1__title">Yx1 earphones</div>
            <Link to="/product/1">See product</Link>
          </div>
        </Content>
      </Wrapper>
      <Profile />
    </>
  );
}

export default Home;
