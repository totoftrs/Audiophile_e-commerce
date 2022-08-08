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
function Headphones() {
  return (
    <>
      <Layout>
        <Title title="Headphones" />
        <>
          <Wrapper>
            <Content>
              <Card title="xx99-mark-two-headphones" />
              <Card title="xx99-mark-one-headphones" />
              <Card title="xx59-headphones" />
            </Content>
          </Wrapper>
          <Products />
          <Profile />
        </>
      </Layout>
    </>
  );
}

export default Headphones;
