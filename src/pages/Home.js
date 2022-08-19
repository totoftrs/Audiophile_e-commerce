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

  @media screen and (max-width: 375px) {
    height: 520px;
  }

  .hero__h1 {
    text-transform: uppercase;
    font-size: min(5vw, 4rem);
    line-height: 1;
    padding: 10px 0;
    @media screen and (max-width: 768px) {
      font-size: 7vw;
    }
    @media screen and (max-width: 375px) {
      font-size: 11vw;
    }
  }

  .hero__para {
    font-size: 1rem;
    padding: 10px 0;
    color: #ccc;

    @media screen and (max-width: 768px) {
      font-size: 2.5vw;
    }
    @media screen and (max-width: 375px) {
      font-size: 3.5vw;
    }
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
    margin-right: 17vw;
    @media screen and (max-width: 768px) {
      margin-right: 60vw;
    }
    @media screen and (max-width: 375px) {
      transform: translateY(-42px);
      /* margin-right: 108vw;
      width: 310vw; */
    }
  }

  .hero__infos {
    z-index: 1;
    color: #fff;
    padding: 20px 4rem 20px 0rem;

    @media screen and (max-width: 768px) {
      position: absolute;
      margin: 0 auto;
      width: 60%;
      text-align: center;
      padding: 0;
    }
    @media screen and (max-width: 375px) {
      width: 80%;
    }
  }

  .hero__txtIntro {
    color: #4c4c4c;
    text-transform: uppercase;
    letter-spacing: 8px;
  }
  .hero__button {
    margin: 15px 0;
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

  .zx9__title,
  .zx7__title,
  .yx1__title {
    text-transform: uppercase;
    font-size: max(2rem, 1.4vw);
    line-height: 1;
    margin-bottom: 1.6rem;
  }
  .zx7__title{
    @media (max-width: 375px) {
      font-size: 5.5vw;
    }
  }
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

  img {
    height: auto;
    width: 100%;
    border-radius: 8px;
  }
  .yx1__title {
    font-size: max(2rem, 1.4vw);
  }

  a {
    background-color: transparent;
    border: 1px solid #000;
    color: #000;
  }

  .zx9__description {
    color: #fff;
    max-width: 21.9rem;
    padding: 10rem 0;
    padding-bottom: 3rem;
    a:hover {
      background-color: #4c4c4c;
    }
  }
  .zx9__picture {
    max-width: 24rem;
    transform: translateY(78px);

    img {
      max-width: 18rem;
      width: 100%;
      height: auto;
    }
    @media screen and (max-width:768px){
      max-width: 12rem;
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
    border-radius: 15px;
    @media screen and (max-width:768px){
      background: url("./assets/home/tablet/image-speaker-zx7.jpg") no-repeat;
    }
    @media screen and (max-width:375px){
      background: url("./assets/home/mobile/image-speaker-zx7.jpg") no-repeat;
      background-size: cover;
    }
  }

  .zx7__description {
    padding: 4rem;
    @media screen and (max-width:375px){
      padding-left: 10px;
    }
    a:hover {
      background: black;
      color: white;
    }
  }
  .zx7__btn {
    color: #000;
    background-color: transparent;
    border: 1px solid #000;
  }
  .yx1__container{
    background-color: #fff;
    justify-content: space-between;

    @media screen and (max-width: 375px){
      flex-direction: column;
    }
  }
  .yx1__content {
    background: #f1f1f1;
    max-width: 540px;
    width: 100%;
    height: 320px;
    border-radius: 15px;
  }
  .yx1__description {
    display: flex;
    align-items: baseline;
    flex-direction: column;
    justify-content: center;
    padding-left: 26px;
    background-color: #f1f1f1;
    height: 100%;
    border-radius: 10px;
   
    a{
      background-color: transparent;
      border: 1px solid #000;
      color: #000;
    }
    a:hover {
      background: black;
      color: white;
    }
  }
  .yx1__title {
    font-size: max(2rem, 1.4vw);

    @media screen and (max-width: 375px){
      font-size: 7vw;
    }
  }
  .yx1-image {
    height: 320px;
    max-width: 100%;
    margin-right: 20px;
    @media screen and (max-width: 375px){
      margin-right: 0px;
      margin-bottom: 20px;
    }

    img {
      height: 100%;
    }
  }

  .txt {
    margin: 20px 10px;
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

  &:hover {
    background-color: #fbaf85;
  }
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
            <Button to="/product/4" className="hero__button">
              See product
            </Button>
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
              ZX7 speaker
            </div>
            <Link to="/product/5" className="zx7__btn">
              See product
            </Link>
          </div>
        </Content>
        <Content className="yx1__container">
          <picture className="yx1-image">
            <source
              media="(max-width: 768px)"
              srcSet="./assets/home/tablet/image-earphones-yx1.jpg"
            />
             <source
              media="(max-width: 375px)"
              srcSet="./assets/home/mobile/image-earphones-yx1.jpg"
            />
            <img
              src="./assets/home/desktop/image-earphones-yx1.jpg"
              alt="yx1__earphones"
            />
          </picture>
          <div className="yx1__content">
            <div className="yx1__description">
              <div className="yx1__title">Yx1 earphones</div>
              <Link to="/product/1">See product</Link>
            </div>
          </div>
        </Content>
      </Wrapper>
      <Profile />
    </>
  );
}

export default Home;
