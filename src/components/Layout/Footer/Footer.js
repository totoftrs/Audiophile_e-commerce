import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000;
  margin: 0 auto;
`

const FooterLayout = styled.footer`
position: relative;
max-width: 1190px;
padding: 5rem 40px;
background-color: #000;
color: #fff;
`

const NavbarContainer = styled.div`
display: flex;
width: 100%;
max-width: 1110px;
margin: 0 auto;
z-index: 1;
justify-content: space-between;

@media (max-width: 960px){
  flex-direction: column;
}
#navbar__logo{
  @media (max-width: 960px){
    margin-bottom: 1rem;
  }
}
`

const NavbarMenu = styled.ul`
display: flex;
list-style: none;
align-items: center;
text-align: center;

.navbar__links{
display: flex;
align-items: center;
justify-content: center;
height: 100%;
text-decoration: none;
color: #fff;
padding: 0 1rem;
font-size: 1.1rem;

@media (max-width: 960px){
  padding: 0 1rem 0 0;
}
}
.navbar__item__footer:nth-child(4) .navbar__links{
padding: 0;
}
`
const Content = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
max-width: 1110px;
margin: 0 auto;
padding: 2rem 0;
`
const ContentText = styled.div`
color: #4C4C4C;
width: 45%;
@media (max-width: 960px){
  width: 100%;
}
`
const ContentSocial = styled.div`
display: flex;
align-items: end;

@media (max-width: 960px){
    position: absolute;
    bottom: 82px;
    right: 3rem;
}
.navbar__icon-card img{
  margin: 0 5px;
}
.navbar__icon-card img:nth-child(3){
  margin: 0;
}
`
const LastText = styled.div`
  color: #4C4C4C;
`

function Footer() {

  return (
    <Wrapper>
        <FooterLayout>
          <NavbarContainer>
            <Link to="/" id="navbar__logo">
                <img src="/assets/shared/desktop/logo.svg" alt="logo"/>
            </Link>
            <NavbarMenu>
                <li className="navbar__item__footer">
                    <Link to="/" className="navbar__links">Home</Link>
                </li>
                <li className="navbar__item__footer">
                    <Link to="/headphones" className="navbar__links">Headphones</Link>
                </li>
                <li className="navbar__item__footer">
                    <Link to="/speakers" className="navbar__links">Speakers</Link>
                </li>
                <li className="navbar__item__footer">
                    <Link to="/earphones" className="navbar__links">Earphones</Link>
                </li>
            </NavbarMenu>
          </NavbarContainer>
          <Content>
            <ContentText>
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
              and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
              visit our demo facility - we’re open 7 days a week.
            </ContentText>
            <ContentSocial>
            <div className="navbar__icon-card">
                <img src="/assets/shared/desktop/icon-facebook.svg" alt="facebook"/>    
                <img src="/assets/shared/desktop/icon-twitter.svg" alt="twitter"/>    
                <img src="/assets/shared/desktop/icon-instagram.svg" alt="instagram"/>    
            </div>
            </ContentSocial>
          </Content>

          <LastText> Copyright 2021. All Rights Reserved</LastText>

        </FooterLayout>
    </Wrapper>
    
  )
}

export default Footer