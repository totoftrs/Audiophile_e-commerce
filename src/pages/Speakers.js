import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Profile from "../components/Profile";
import Products from "../components/Products";
import Card from "../components/Card";
import Title from "./Wording";

const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1190px;
  width: 100%;
  padding: 0 40px;

  .card:nth-child(2) .card__content {
    flex-direction: row-reverse;
    @media (max-width: 768px) {
      max-width: 100%;
      flex-direction: column;
    }
  }
`;
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Speakers() {
  return (
    <div className="App">
      <Layout>
        <Title title="Speakers" />
        <>
          <Wrapper>
            <Content>
              <Card title="zx9-speaker" />
              <Card className="card card__two" title="zx7-speaker" />
            </Content>
          </Wrapper>
          <Products />
          <Profile />
        </>
      </Layout>
    </div>
  );
}

export default Speakers;
