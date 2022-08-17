import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import data from "../data.json";
import Card from "../components/Card";
import Products from "../components/Products";
import Profile from "../components/Profile";
import Gallery from "../components/Gallery";
import FeaturesIncludes from "../components/FeaturesIncludes";
import { Link } from "react-router-dom";
import Others from "../components/Others";

const Wrapper = styled.section`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 375px){
    padding: 0 10px;
  }

  .back {
    display: block;
    margin-bottom: 2.6rem;
    margin-top: 3.9rem;
    color: #979797;
    text-decoration: none;
  }
`;
function Details() {
  const { id } = useParams();
  const findProduct = data.find((product) => product.id == id);

  const formatMoney = (n) => {
    const lengthPrice = `${n}`.length;
    if (lengthPrice === 4) {
      return (n / 1000).toFixed(3);
    }
    return n;
  };
  return (
    <>
      <Layout>
        <Wrapper>
          <Link to={`/${findProduct.category}`} className="back">
            Go Back
          </Link>
          <Card formatMoney={formatMoney} />
          <FeaturesIncludes findProduct={findProduct} />
          <Gallery findProduct={findProduct} />
        </Wrapper>
        <Others findProduct={findProduct} />
        <Products />
        <Profile />
      </Layout>
    </>
  );
}

export default Details;
