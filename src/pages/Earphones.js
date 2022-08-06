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
`;
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
function Earphones() {
  return (
    <div className="App">
      <Layout>
        <Title title="Earphones" />
        <>
          <Wrapper>
            <Content>
              <Card title="yx1-earphones" />
            </Content>
          </Wrapper>
          <Products />
          <Profile />
        </>
      </Layout>
    </div>
  );
}

export default Earphones;
