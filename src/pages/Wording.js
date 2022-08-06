import React from "react";
import styled from "styled-components";

const Wording = styled.div`
  width: 100%;
  background-color: #000;
  margin-bottom: 8rem;

  .wording__h1 {
    font-size: 2.5rem;
    padding: 5rem 0;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
  }
`;
function Title({ title }) {
  return (
    <Wording>
      <h1 className="wording__h1">{title}</h1>
    </Wording>
  );
}

export default Title;
