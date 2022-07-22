import React from 'react'
import Layout from '../Layout/Layout'
import styled from 'styled-components'
import Profile from '../Profile'
import Products from '../Products'
import Card from '../Card'
import Title from './Wording'

const Content = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 1190px;
width: 100%;
padding: 0 40px;

.card:nth-child(2){
    flex-direction: row-reverse;
  }

`
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

function Speakers() {

  return (
    <div className='App'>
        <Layout>
        <Title title="Speakers"/>
        <>
        <Wrapper>
          <Content>
            <Card title="zx9-speaker"/>
            <Card className='card card__two' title="zx7-speaker" />
          </Content>
        </Wrapper>
        <Products />
        <Profile />
      </>
        </Layout>
    </div>
   
  )
}

export default Speakers