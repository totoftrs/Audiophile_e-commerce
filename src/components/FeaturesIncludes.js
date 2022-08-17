import React from "react";
import styled from "styled-components";

const Features = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  margin-bottom: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 8rem;
  }

  .features__h2 {
    text-transform: uppercase;
    padding: 2.5rem 0;
  }
  .features__para {
    color: #979797;
  }
  .features {
    width: 60%;
    @media (max-width: 960px) {
      width: 100%;
    }
  }
  .features__inthebox {
    width: 40%;
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
    }
    @media (max-width: 375px) {
      flex-direction: column;
    }

    .features__ul {
      list-style: none;
    }
    span {
      color: #979797;
    }
    span:first-child {
      color: #d87d4a;
      font-weight: 600;
    }
    span:nth-child(2) {
      padding: 0 1rem;
    }
  }
`;

function FeaturesIncludes({ findProduct }) {
  return (
    <Features>
      <div className="features">
        <h2 className="features__h2">features</h2>
        <p className="features__para">{findProduct.features}</p>
      </div>
      <div className="features__inthebox">
        <h2 className="features__h2">in the box</h2>
        <ul className="features__ul">
          {findProduct.includes.map((a, index) => (
            <li key={index}>
              <span className="features__quantity">{a.quantity}x</span>
              <span>{a.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Features>
  );
}

export default FeaturesIncludes;
