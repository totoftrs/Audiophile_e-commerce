import React from 'react'
import styled from 'styled-components';
import Products from '../Products';
import Profile from '../Profile';
import { Link } from 'react-router-dom'


const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #191919;
  width: 100%;
  margin: 0 auto;


h1{
  font-size: 4rem;
  padding: 10px 0;
}

p{
  font-size: 1rem;
  padding: 10px 0;
  color: #4C4C4C;
}

figure{
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 960){
    transform: translateX(0rem);
  }
}

img{
  width: 200%;
  margin-right: 30rem;
}

.infos{
  z-index: 1;
  color: #fff;
  margin-right: 4rem;

  @media screen and (max-width: 960px){
    position: absolute;
    margin: 0 auto;
    width: 30rem;
    text-align: center;
  }
}

.txtIntro{
  color: #4C4C4C;
  text-transform: uppercase;
  letter-spacing: 8px;
}

`
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: #191919; */
  max-width: 1190px;
  padding: 0 40px;
  margin: 0 auto;


.speaker__container{
  background-color: #D87D4A;
  background-image: url('./assets/home/desktop/pattern-circles.svg');
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

  @media (max-width: 960px){
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.yx1__container{
    grid-gap: 3rem;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(2,minmax(0,1fr));
    background-color: #fff;

    @media (max-width: 960px){
      flex: 1.1;
    }
  img{
    height: auto;
    width: 100%;
    border-radius: 8px;
  }
  .title{
    font-size: 2rem;
  }

  a{
    background-color: transparent;
    border: 1px solid #000;
    color: #000;
  }
}

.zx7__speaker__container{
  background-color: #979797;
  background: url('./assets/home/desktop/image-speaker-zx7.jpg') no-repeat;
  margin: 3.4rem 0;
  color: #fff;
  justify-content: left;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  color: #000;
}

.zx9-speaker-description{
  color: #fff;
  max-width: 21.9rem;
  padding: 10rem 0;
}

.zx7-speaker-description{
  padding: 4rem;
}

.yx1-earphones-description{
  background-color: #F1F1F1;
  padding: 5.8rem 7rem;

  @media (max-width : 960px){
    padding: 4rem 7rem;
  }
}

.title{
  text-transform: uppercase;
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 1.6rem;
}

.txt{
  margin-bottom: 1.6rem;
}

a{
  border: none;
  display: inline-block;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1.2rem 2.2rem;
  text-transform: uppercase;
  transition: .5s;
  background-color: #000;
  color: #fff;
  text-decoration: none;
}

.btn-zx7{
  color: #000;
  background-color: transparent;
  border: 1px solid #000;
}

.zx9-speaker-image{
  max-width: 24rem;
  transform: translateY(78px);

  img{
    max-width: 100%;
    height: auto;
  }
}

`

const Content = styled.main`
display: flex;
justify-content: center;
align-items: center;
background-color: #191919;
width: 100%;
`

const ContentHero = styled.main`
display: flex;
justify-content: center;
align-items: center;
/* background-color: #191919; */
max-width: 1190px;
padding: 0 40px;
width: 100%;

`

const Button = styled.a`
border: none;
display: inline-block;
font-size: 1.2rem;
font-weight: 700;
letter-spacing: 1px;
padding: 1.5rem 3.5rem;
text-transform: uppercase;
transition: .5s;
text-decoration: none;

color: #fff;
background-color: #D87D4A !important;
`
function Home() {

  return (
    <>
      <Hero>
        <ContentHero>
            <div className='infos'>
            <div className='txtIntro'> New product</div>
            <h1>
            XX99 Mark II Headphones
            </h1> 
            <p>Experience natural, lifelike audio and exceptional<br />build quality made for the passionate music<br />enthusiast.</p>
            <Button href='product/4'>See product</Button>
          </div>
          <figure>
              <img src="/assets/home/desktop/image-hero.jpg" alt="XX99 Mark II Headphones" />
          </figure>
        </ContentHero>
   
    </Hero>
    <Products />
    <Wrapper>
      <Content className='speaker__container'>
        <picture className='zx9-speaker-image'>
         <img src= "./assets/home/desktop/image-speaker-zx9.png" alt='speaker-zx9'/>

        </picture>
        <div className='zx9-speaker-description'>
          <div className='title'> ZX9<br />speaker</div>
          <div className='txt'> Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</div>
          <Link to='/product/6'>See product</Link>
        </div>
      </Content>
      <Content className='zx7__speaker__container'>
        <div className='zx7-speaker-description'>
          <div className='title'> ZX7<br />speaker</div>
          <Link to='/product/5' className='btn-zx7'>See product</Link>
        </div>
      </Content>
      <Content className='yx1__container'>
        <picture className='yx1-image'>
        <source
              media="(max-width: 962px)"
              srcSet="./assets/home/tablet/image-earphones-yx1.jpg"
            />
         <img src= "./assets/home/desktop/image-earphones-yx1.jpg" alt='yx1__earphones'/>
        </picture>
        <div className='yx1-earphones-description'>
          <div className='title'>Yx1 earphones</div>
          <Link to='/product/1'>See product</Link>
        </div>
      </Content>
    </Wrapper>
    <Profile />

    </>
  
    
  )
}

export default Home