import React from "react";

// Styles
import styled from "styled-components";
import { breakpoints } from "styles";

// Self Components
import { ProductCard } from "./ProductCard";

export const Products = ({ products }) => {
  return (
    <Wrapper>
      {products &&
        products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 48px 0;
  margin-top: 64px;

  ${breakpoints.tabletLandscape} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 48px 24px;
  }

  ${breakpoints.desktopXL} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 80px 24px;
  }
`;
